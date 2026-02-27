import { v4 } from "uuid";
import User from "../models/User.js";
import UserProfile from "../models/UserProfile.js";
import { userDTO } from "../dtos/users/userDTO.js";
import { userProfileDTO } from "../dtos/users/userProfileDTO.js";
import { storeUserSchema } from "../validators/store/storeUserSchema.js";
import { storeUserProfileSchema } from "../validators/store/storeUserProfileSchema.js";
import { normalizeDateOnly } from "../utils/dateUtils.js";

class UserController {
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
					role: "PACIENTE",
				},
				{ transaction },
			);

			const profileInput = {
				birthDate: normalizeDateOnly(req.body.birthDate),
				susCard: req.body.susCard,
				bloodType: req.body.bloodType,
				address: req.body.address,
				neighborhood: req.body.neighborhood,
				cep: req.body.cep,
				city: req.body.city,
				uf: req.body.uf,
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

			await transaction.commit();

			return res.status(201).json({
				message: "Sucesso ao realizar o cadastro!",
				user: userDTO(user),
				profile: userProfileDTO(profile),
			});
		} catch (e) {
			console.error("Erro ao cadastrar usuário:", e);
			await transaction.rollback();
			return res
				.status(400)
				.json({ error: e || ["Erro ao cadastrar usuário"] });
		}
	}

	async show(req, res) {
		try {
			if (req.session && req.session.user) {
				const userId = req.session.user.id;

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

				if (!user)
					return res.status(404).json({ error: "Usuário não encontrado!" });

				return res.status(200).json({
					authenticated: true,
					user: userDTO(user),
					profile: user.profile ? userProfileDTO(user.profile) : null,
				});
			}
			return res.status(200).json({ authenticated: false });
		} catch (e) {
			console.error("Erro na rota /me:", e);
			return res.status(500).json({ error: "Erro ao verificar autenticação!" });
		}
	}
}

export default new UserController();
