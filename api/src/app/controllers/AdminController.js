import { v4 } from "uuid";
import { Op } from "sequelize";
import { Ubs, UbsAdmin, UbsWorkRequest } from "../models/index.js";
import Erro400 from "../errors/Erro400.js";
import Erro403 from "../errors/Erro403.js";
import Erro404 from "../errors/Erro404.js";
import { getWorkerProfile } from "../utils/workerProfileUtils.js";
import { storeUbsSchema } from "../validators/store/storeUbsSchema.js";
import { reviewUbsWorkRequestSchema } from "../validators/update/reviewUbsWorkRequestSchema.js";
import { ubsDTO } from "../dtos/ubs/ubsDTO.js";
import { ubsListWorkRequestDTO } from "../dtos/ubs/ubsListWorkRequestDTO.js";
import { createUserProfile } from "../services/createUserProfileService.js";

class AdminController {
	async store(req, res, next) {
		try {
			const { user, ubs } = await createUserProfile({
				payload: req.body,
				role: "ADMIN",
				createProfile: async ({ user, transaction, payload }) => {
					const {
						nameUbs,
						cnes,
						cnpj,
						address,
						neighborhood,
						cep,
						city,
						uf,
						phoneUbs,
						emailUbs,
						openingHours,
						website,
						services,
					} = await storeUbsSchema.validate(payload, {
						abortEarly: false,
					});

					const cnesExists = await Ubs.findOne({ where: { cnes } });
					if (cnesExists) {
						throw new Erro400("CNES já cadastrado!");
					}

					const cnpjExists = await Ubs.findOne({ where: { cnpj } });
					if (cnpjExists) {
						throw new Erro400("CNPJ já cadastrado!");
					}

					const ubs = await Ubs.create(
						{
							id: v4(),
							name: nameUbs,
							cnes,
							cnpj,
							address,
							neighborhood,
							cep,
							city,
							uf,
							phone: phoneUbs,
							email: emailUbs,
							openingHours,
							website,
							services,
							createdByUserId: user.id,
						},
						{ transaction },
					);

					await UbsAdmin.create(
						{
							id: v4(),
							ubsId: ubs.id,
							userId: user.id,
						},
						{ transaction },
					);

					return { ubs };
				},
			});

			return res.status(201).json({
				message: "Admin e UBS criados com sucesso!",
				ubs: ubsDTO(ubs, user),
			});
		} catch (e) {
			return next(e);
		}
	}

	async listWorkRequests(req, res, next) {
		try {
			const statusFromQuery = req.query.status
				? String(req.query.status).toUpperCase()
				: "PENDENTE";

			if (!["PENDENTE", "APROVADA", "REJEITADA"].includes(statusFromQuery)) {
				throw new Erro400(
					"Status inválido. Use PENDENTE, APROVADA ou REJEITADA.",
				);
			}

			const adminUbs = await UbsAdmin.findAll({
				where: {
					userId: req.auth.id,
				},
				attributes: ["ubsId"],
			});

			const requests = await UbsWorkRequest.findAll({
				where: {
					status: statusFromQuery,
					ubsId: {
						[Op.in]: adminUbs.map((admin) => admin.ubsId),
					},
				},
				include: [
					{
						association: "ubs",
						attributes: ["id", "name", "city", "uf", "address"],
					},
					{
						association: "requester",
						attributes: ["id", "name", "email"],
					},
					{
						association: "reviewer",
						attributes: ["id", "name", "email"],
						required: false,
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

	async reviewWorkRequest(req, res, next) {
		try {
			const { id } = req.params;
			const { decision, adminMessage } =
				await reviewUbsWorkRequestSchema.validate(req.body, {
					abortEarly: false,
				});

			const workRequest = await UbsWorkRequest.findByPk(id, {
				include: [
					{
						association: "ubs",
						attributes: ["id", "name", "city", "uf", "address"],
					},
					{
						association: "requester",
						attributes: ["id", "name", "email"],
					},
					{
						association: "reviewer",
						attributes: ["id", "name", "email"],
						required: false,
					},
				],
			});

			if (!workRequest) {
				throw new Erro404("Pedido de trabalho não encontrado!");
			}

			if (workRequest.status !== "PENDENTE") {
				throw new Erro400("Esta solicitação já foi analisada.");
			}

			const canReviewRequest = await UbsAdmin.findOne({
				where: {
					ubsId: workRequest.ubsId,
					userId: req.auth.id,
				},
			});

			if (!canReviewRequest) {
				throw new Erro403(
					"Você não possui permissão para analisar solicitações desta UBS.",
				);
			}

			const shouldApprove = decision === "APROVAR";
			const transaction = await UbsWorkRequest.sequelize.transaction();

			if (shouldApprove) {
				const profile = await getWorkerProfile(
					workRequest.workerRole,
					workRequest.userId,
					transaction,
				);

				if (!profile) {
					throw new Erro404(
						"Perfil profissional do solicitante não foi encontrado.",
					);
				}
			}

			workRequest.status = shouldApprove ? "APROVADA" : "REJEITADA";
			workRequest.adminMessage = adminMessage;
			workRequest.reviewedByUserId = req.auth.id;
			workRequest.reviewedAt = new Date();

			await workRequest.save({ transaction });
			await transaction.commit();

			return res.status(200).json({
				message: `Solicitação ${shouldApprove ? "aprovada" : "rejeitada"} com sucesso!`,
				request: ubsWorkRequestDTO(workRequest),
			});
		} catch (e) {
			return next(e);
		}
	}
}

export default new AdminController();
