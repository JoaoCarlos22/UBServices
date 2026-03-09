import { v4 } from "uuid";
import User from "../models/User.js";
import UserProfile from "../models/UserProfile.js";
import Erro401 from "../errors/Erro401.js";
import Erro404 from "../errors/Erro404.js";
import { userProfileDTO } from "../dtos/users/userProfileDTO.js";
import { storeUserProfileSchema } from "../validators/store/storeUserProfileSchema.js";
import { normalizeDateOnly } from "../utils/dateUtils.js";
import { createUserProfile } from "../services/createUserProfile.js";

class UserController {
	async store(req, res, next) {
		try {
			const { user, profile } = await createUserProfile({
				payload: req.body,
				role: "PACIENTE",
				createProfile: async ({ user, transaction, payload }) => {
					const profileInput = {
						birthDate: normalizeDateOnly(payload.birthDate),
						susCard: payload.susCard,
						bloodType: payload.bloodType,
						address: payload.address,
						neighborhood: payload.neighborhood,
						cep: payload.cep,
						city: payload.city,
						uf: payload.uf,
					};

					await storeUserProfileSchema.validate(
						{ userId: user.id, ...profileInput },
						{ abortEarly: false },
					);

					const profile = await UserProfile.create(
						{
							id: v4(),
							userId: user.id,
							...profileInput,
						},
						{ transaction },
					);

					return { profile };
				},
			});

			return res.status(201).json({
				message: "Sucesso ao realizar o cadastro!",
				profile: userProfileDTO(profile, user),
			});
		} catch (e) {
			return next(e);
		}
	}

	async show(req, res, next) {
		try {
			if (!req.auth) {
				throw new Erro401("Usuario nao autenticado");
			}

			const userId = req.auth.id;

			const user = await User.findByPk(userId, {
				attributes: ["id", "name", "email", "role", "createdAt"],
				include: [
					{
						model: UserProfile,
						as: "profile",
						required: false,
						attributes: [
							"id",
							"userId",
							"birthDate",
							"susCard",
							"bloodType",
							"address",
							"neighborhood",
							"cep",
							"city",
							"uf",
							"createdAt",
						],
					},
				],
			});

			if (!user) {
				throw new Erro404("Usuario nao encontrado!");
			}

			return res.status(200).json({
				authenticated: true,
				profile: userProfileDTO(user.profile, user),
			});
		} catch (e) {
			return next(e);
		}
	}
}

export default new UserController();
