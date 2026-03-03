import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { userDTO } from "../dtos/users/userDTO.js";
import { storeSessionSchema } from "../validators/session/storeSessionSchema.js";

class SessionController {
	async store(req, res) {
		try {
			const { email, password } = req.body;

			const errorEmailPassword = () =>
				res.status(401).json({ error: "Email/senha incorretos!" });

			if (!(await storeSessionSchema.isValid(req.body))) {
				return errorEmailPassword();
			}

			const user = await User.findOne({ where: { email } });
			if (!user) return errorEmailPassword();

			if (!(await user.checkPassword(password))) return errorEmailPassword();

			const token = jwt.sign(
				{ id: user.id, role: user.role },
				process.env.JWT_SECRET,
				{
					expiresIn: process.env.JWT_EXPIRES_IN,
				},
			);

			return res.status(200).json({
				message: "Sucesso ao realizar o login!",
				token,
				expiresIn: process.env.JWT_EXPIRES_IN,
			});
		} catch (e) {
			return res.status(400).json({ error: e.errors || e });
		}
	}
}

export default new SessionController();
