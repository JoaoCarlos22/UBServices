import { v4 } from "uuid";
import DoctorProfile from "../models/DoctorProfile.js";
import Erro400 from "../errors/Erro400.js";
import { doctorProfileDTO } from "../dtos/users/doctorProfileDTO.js";
import { storeDoctorProfileSchema } from "../validators/store/storeDoctorProfileSchema.js";
import { createUserProfile } from "../services/createUserProfileService.js";

class DoctorController {
	async store(req, res, next) {
		try {
			const { user, profile } = await createUserProfile({
				payload: req.body,
				role: "MEDICO",
				createProfile: async ({ user, transaction, payload }) => {
					const { crm, crmUf, specialty } =
						await storeDoctorProfileSchema.validate(payload, {
							abortEarly: false,
						});

					const crmExists = await DoctorProfile.findOne({ where: { crm } });
					if (crmExists) {
						throw new Erro400("CRM já cadastrado para este estado!");
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

					return { profile };
				},
			});

			return res.status(201).json({
				message: "Perfil médico cadastrado com sucesso!",
				profile: doctorProfileDTO(profile, user),
			});
		} catch (e) {
			return next(e);
		}
	}
}

export default new DoctorController();
