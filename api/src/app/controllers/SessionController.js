import * as Yup from "yup";
import User from "../models/User.js";

class SessionController {
	async store(req, res) {
		try {
			const { email, password } = req.body;

			const schema = Yup.object().shape({
				email: Yup.string()
					.email("Email incorreto!")
					.required("O campo 'email' é obrigatório!"),
				password: Yup.string().required("O campo 'senha' é obrigatório!"),
			});

			const errorEmailPassword = () =>
				res.status(401).json({ error: "Email/senha incorretos!" });

			if (!(await schema.isValid(req.body))) return errorEmailPassword();

			const user = await User.findOne({ where: { email } });
			if (!user) return errorEmailPassword();

			if (!(await user.checkPassword(password))) return errorEmailPassword();

			return res.status(200).json({
				message: "Sucesso ao realizar o login!",
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
					role: user.role,
				},
			});
		} catch (e) {
			return res
				.status(400)
				.json({ error: e.errors || ["Erro ao realizar login"] });
		}
	}
}

export default new SessionController();
