import { v4 } from "uuid";
import { Ubs, UbsAdmin } from "../models/index.js";
import Erro400 from "../errors/Erro400.js";
import { storeUbsSchema } from "../validators/store/storeUbsSchema.js";
import { ubsDTO } from "../dtos/ubs/ubsDTO.js";
import { createUserProfile } from "../services/createUserProfile.js";

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
}

export default new AdminController();
