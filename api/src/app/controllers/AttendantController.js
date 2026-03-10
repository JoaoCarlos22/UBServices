import { v4 } from "uuid";
import AttendantProfile from "../models/AttendantProfile.js";
import { attendantProfileDTO } from "../dtos/users/attendantProfileDTO.js";
import { createUserProfile } from "../services/createUserProfileService.js";

class AttendantController {
	async store(req, res, next) {
		try {
			const { user, profile } = await createUserProfile({
				payload: req.body,
				role: "ATENDENTE",
				createProfile: async ({ user, transaction }) => {
					const profile = await AttendantProfile.create(
						{
							id: v4(),
							userId: user.id,
						},
						{ transaction },
					);

					return { profile };
				},
			});

			return res.status(201).json({
				message: "Perfil atendente cadastrado com sucesso!",
				profile: attendantProfileDTO(profile, user),
			});
		} catch (e) {
			return next(e);
		}
	}
}

export default new AttendantController();
