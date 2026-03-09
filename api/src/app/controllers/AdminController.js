import { v4 } from "uuid";
import { User, Ubs, UbsAdmin } from "../models/index.js";
import { storeUserSchema } from "../validators/store/storeUserSchema.js";
import { storeUbsSchema } from "../validators/store/storeUbsSchema.js";
import { ubsDTO } from "../dtos/ubs/ubsDTO.js";

class AdminController {
	async store(req, res) {
		let transaction;
		try {
			const { name, email, password, cpf, phone } =
				await storeUserSchema.validate(req.body, {
					abortEarly: false,
				});

			const emailExists = await User.findOne({ where: { email } });
			if (emailExists) {
				return res
					.status(400)
					.json({ error: "Email do usuário já cadastrado!" });
			}

			const cpfExists = await User.findOne({ where: { cpf } });
			if (cpfExists) {
				return res.status(400).json({ error: "CPF do usuário já cadastrado!" });
			}

			transaction = await User.sequelize.transaction();

			const user = await User.create(
				{
					id: v4(),
					name,
					email,
					password,
					cpf,
					phone,
					role: "ADMIN",
				},
				{ transaction },
			);

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
			} = await storeUbsSchema.validate(req.body, {
				abortEarly: false,
			});

			const cnesExists = await Ubs.findOne({ where: { cnes } });
			if (cnesExists) {
				await transaction.rollback();
				return res.status(400).json({ error: "CNES já cadastrado!" });
			}

			const cnpjExists = await Ubs.findOne({ where: { cnpj } });
			if (cnpjExists) {
				await transaction.rollback();
				return res.status(400).json({ error: "CNPJ já cadastrado!" });
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

			await transaction.commit();

			return res
				.status(201)
				.json({
					message: "Admin e UBS criados com sucesso!",
					ubs: ubsDTO(ubs, user),
				});
		} catch (e) {
			console.error(e);
			await transaction.rollback();
			return res.status(400).json({ error: e.errors || e });
		}
	}
}

export default new AdminController();
