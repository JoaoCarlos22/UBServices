import { v4 } from "uuid";
import * as Yup from "yup";
import User from "../models/User.js";

class UserController {
	// cadastra novo usuário
	async store(req, res) {
		try {
			// coleta os campos do 'body'
			const {
				name,
				email,
				password,
				role = "PACIENTE",
			} = await Yup.object()
				.shape({
					name: Yup.string().required("O campo 'nome' é obrigatório!"),
					email: Yup.string()
						.email("Email incorreto!")
						.required("O campo 'email' é obrigatório!"),
					password: Yup.string()
						.required("O campo 'senha' é obrigatório!")
						.min(6, "Digite no mínimo 6 dígitos no campo 'senha'!"),
					role: Yup.string()
						.oneOf(["ADMIN", "MEDICO", "ATENDENTE", "PACIENTE"])
						.default("PACIENTE"),
				})
				.validate(req.body, { abortEarly: false });

			// verifica se o email já existe
			const userExists = await User.findOne({
				where: { email },
			});

			if (userExists) {
				return res.status(400).json({ error: "Email já cadastrado!" });
			}

			// cria uma nova instância com os dados no postgres
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
				.json({ error: e || ["Erro ao cadastrar usuário"] });
		}
	}
}

export default new UserController();
