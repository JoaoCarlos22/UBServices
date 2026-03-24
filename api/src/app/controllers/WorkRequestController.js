import { v4 } from "uuid";
import {
	AttendantProfile,
	DoctorProfile,
	Ubs,
	UbsAttendant,
	UbsDoctor,
	UbsWorkRequest,
} from "../models/index.js";
import Erro400 from "../errors/Erro400.js";
import Erro403 from "../errors/Erro403.js";
import Erro404 from "../errors/Erro404.js";
import { ubsWorkRequestDTO } from "../dtos/ubs/ubsWorkRequestDTO.js";
import { ubsListWorkRequestDTO } from "../dtos/ubs/ubsListWorkRequestDTO.js";
import { storeUbsWorkRequestSchema } from "../validators/store/storeUbsWorkRequestSchema.js";
import { reviewUbsWorkRequestSchema } from "../validators/store/reviewUbsWorkRequestSchema.js";

const WORKER_ROLES = ["MEDICO", "ATENDENTE"];

// Função auxiliar para obter o perfil profissional do usuário com base no cargo
const getWorkerProfile = async (role, userId, transaction) => {
	if (role === "medico") {
		return DoctorProfile.findOne({
			where: { userId },
			include: { association: "user", attributes: ["name", "email", "role"] },
			transaction,
		});
	}

	if (role === "atendente") {
		return AttendantProfile.findOne({
			where: { userId },
			include: { association: "user", attributes: ["name", "email", "role"] },
			transaction,
		});
	}

	return null;
};

// Função auxiliar para verificar se já existe um vínculo ativo entre o profissional e a UBS
const getExistingLink = async (role, ubsId, profileId) => {
	if (role === "MEDICO") {
		return UbsDoctor.findOne({
			where: {
				ubsId,
				doctorProfileId: profileId,
			},
		});
	}

	if (role === "ATENDENTE") {
		return UbsAttendant.findOne({
			where: {
				ubsId,
				attendantProfileId: profileId,
			},
		});
	}

	return null;
};

class WorkRequestController {
	async store(req, res, next) {
		try {
			const userId = req.auth?.id;
			const userRole = req.auth?.role;

			if (userRole == "paciente") {
				throw new Erro403(
					"Somente perfis médico e atendente podem realizar essa operação.",
				);
			}

			const { ubsId, message } = await storeUbsWorkRequestSchema.validate(
				req.body,
				{
					abortEarly: false,
				},
			);

			const [ubs, existingPendingRequest] = await Promise.all([
				Ubs.findByPk(ubsId),
				UbsWorkRequest.findOne({
					where: {
						userId,
						ubsId,
						status: "PENDENTE",
					},
				}),
			]);

			if (!ubs) {
				throw new Erro404("UBS não encontrada!");
			}

			if (existingPendingRequest) {
				throw new Erro400(
					"Você já possui uma solicitação pendente para esta UBS.",
				);
			}

			const profile = await getWorkerProfile(userRole, userId);
			if (!profile) {
				throw new Erro400(
					"Perfil profissional não encontrado para este usuário.",
				);
			}

			const existingLink = await getExistingLink(userRole, ubsId, profile.id);
			if (existingLink) {
				throw new Erro400("Você já está vinculado a esta UBS.");
			}

			const workRequest = await UbsWorkRequest.create({
				id: v4(),
				userId,
				ubsId,
				workerRole: userRole.toUpperCase(),
				status: "PENDENTE",
				message,
				resumeOriginalName: req.file?.originalname || null,
				resumeFileName: req.file?.filename || null,
				resumeMimeType: req.file?.mimetype || null,
				resumeSize: req.file?.size || null,
			});

			return res.status(201).json({
				message:
					"Solicitação enviada com sucesso! Aguarde a análise do administrador da UBS.",
				request: ubsWorkRequestDTO(workRequest, ubs, profile),
			});
		} catch (e) {
			return next(e);
		}
	}

	async listMy(req, res, next) {
		try {
			if (req.auth.role == "paciente") {
				throw new Erro403(
					"Somente perfis médico e atendente podem realizar essa requisição.",
				);
			}

			const requests = await UbsWorkRequest.findAll({
				where: {
					userId: req.auth.id,
				},
				include: [
					{
						association: "ubs",
						attributes: ["id", "name", "city", "uf", "address"],
					},
					{
						association: "reviewer",
						attributes: ["id", "name", "email"],
					},
				],
				order: [["createdAt", "DESC"]],
			});

			return res.status(200).json({
				...ubsListWorkRequestDTO(requests),
			});
		} catch (e) {
			return next(e);
		}
	}
}

export default new WorkRequestController();
