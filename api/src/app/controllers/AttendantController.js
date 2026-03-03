import { v4 } from "uuid";
import User from "../models/User.js";
import AttendantProfile from "../models/AttendantProfile.js";
import { attendantProfileDTO } from "../dtos/users/attendantProfileDTO.js";
import { storeUserSchema } from "../validators/store/storeUserSchema.js";

class AttendantController {
	async store(req, res) {
		let transaction;
		try {
			const { name, email, password, cpf, phone } =
				await storeUserSchema.validate(req.body, {
					abortEarly: false,
				});

			const emailExists = await User.findOne({ where: { email } });
			if (emailExists) {
				return res.status(400).json({ error: "Email já cadastrado!" });
			}

			const cpfExists = await User.findOne({ where: { cpf } });
			if (cpfExists) {
				return res.status(400).json({ error: "CPF já cadastrado!" });
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
					role: "ATENDENTE",
				},
				{ transaction },
			);

			const profile = await AttendantProfile.create(
				{
					id: v4(),
					userId: user.id,
				},
				{ transaction },
			);

			await transaction.commit();

			return res.status(201).json({
				message: "Perfil atendente cadastrado com sucesso!",
				profile: attendantProfileDTO(profile, user),
			});
		} catch (e) {
			console.error("Erro ao cadastrar perfil atendente:", e);
			await transaction.rollback();
			return res.status(400).json({ error: e.errors || e });
		}
	}
}

export default new AttendantController();
