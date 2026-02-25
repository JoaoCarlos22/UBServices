import { v4 } from "uuid";
import User from "../models/User.js";
import { userDTO } from "../dtos/user/userDTO.js";
import { storeUserSchema } from "../validators/user/storeUserSchema.js";

class UserController {
	// cadastra novo usuário
	async store(req, res) {
		try {
			const {
				name,
				email,
				password,
				role = "PACIENTE",
			} = await storeUserSchema.validate(req.body, { abortEarly: false });

			const userExists = await User.findOne({
				where: { email },
			});

			if (userExists) {
				return res.status(400).json({ error: "Email já cadastrado!" });
			}

			await User.create({
				id: v4(),
				name,
				email,
				password,
				role,
			});

			return res
				.status(201)
				.json({ message: "Sucesso ao realizar o cadastro!" });
		} catch (e) {
			console.error("Erro ao cadastrar usuário:", e);
			return res
				.status(400)
				.json({ error: e.errors || ["Erro ao cadastrar usuário"] });
		}
	}

	async show(req, res) {
		try {
			if (req.session && req.session.user) {
				const userId = req.session.user.id;

				const user = await User.findOne({
					where: { id: userId },
					attributes: ["name", "email", "role", "createdAt"],
				});

				if (!user)
					return res.status(404).json({ error: "Usuário não encontrado!" });

				return res.status(200).json({
					authenticated: true,
					user: userDTO(user),
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
