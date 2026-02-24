import { v4 } from "uuid";
import * as Yup from "yup";
import User from "../models/User.js";

class UserController {
	// cadastra novo usuário
	async store(req, res) {
		try {
			// coleta os campos do 'body'
			const { name, email, password } = req.body;

			// verifica se o email já existe
			const userExists = await User.findOne({
				where: { email },
			});

			if (userExists) {
				return res.status(400).send({ error: "Email já cadastrado!" });
			}

			// estrutura que deve ser aceita
			const schema = Yup.object().shape({
				name: Yup.string("O campo 'nome' não aceita somente números!").required(
					"O campo 'nome' é obrigatório!",
				),

				email: Yup.string("O campo 'email' não aceita somente números!")
					.email("Email incorreto!")
					.required("O campo 'email' é obrigatório!"),

				password: Yup.string("O campo 'senha' não aceita somente números!")
					.required("O campo 'senha' é obrigatório!")
					.min(6, "Digite no mínimo 6 digitos! no campo 'senha'!"),
			});

			// realiza a validação do esquema (caso der erro, lançará uma exceção)
			schema.validateSync(req.body, { abortEarly: false });

			// cria uma nova instância com os dados no postgres
			const user = await User.create({
				id: v4(),
				name,
				email,
				password,
			});

			return res.json({ message: "Sucesso ao realizar o cadastro!" });
		} catch (e) {
			return res.send({ error: e.errors });
		}
	}
}

export default new UserController();
