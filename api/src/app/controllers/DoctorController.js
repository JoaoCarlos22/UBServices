import { v4 } from "uuid";
import User from "../models/User.js";
import DoctorProfile from "../models/DoctorProfile.js";
import { doctorProfileDTO } from "../dtos/users/doctorProfileDTO.js";
import { userDTO } from "../dtos/users/userDTO.js";
import { storeUserSchema } from "../validators/store/storeUserSchema.js";
import { storeDoctorProfileSchema } from "../validators/store/storeDoctorProfileSchema.js";

class DoctorController {
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
					role: "MEDICO",
				},
				{ transaction },
			);

			const { crm, crmUf, specialty } = await storeDoctorProfileSchema.validate(
				req.body,
				{
					abortEarly: false,
				},
			);

			const crmExists = await DoctorProfile.findOne({ where: { crm } });
			if (crmExists) {
				return res
					.status(400)
					.json({ error: "CRM já cadastrado para este estado!" });
			}

			const profile = await DoctorProfile.create(
				{
					id: v4(),
					userId: user.id,
					crm,
					crmUf,
					specialty,
				},
				{ transaction },
			);

			await transaction.commit();

			return res.status(201).json({
				message: "Perfil médico cadastrado com sucesso!",
				profile: doctorProfileDTO(profile, user),
			});
		} catch (e) {
			console.error("Erro ao cadastrar perfil médico:", e);
			await transaction.rollback();
			return res.status(400).json({ error: e.errors || e });
		}
	}
}

export default new DoctorController();
