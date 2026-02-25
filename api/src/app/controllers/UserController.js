import { v4 } from "uuid";
import User from "../models/User.js";
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
}

export default new UserController();
