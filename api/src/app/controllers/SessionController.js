import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Erro401 from "../errors/Erro401.js";
import { storeSessionSchema } from "../validators/session/storeSessionSchema.js";

class SessionController {
	async store(req, res, next) {
		try {
			const { email, password } = req.body;

			const throwEmailPasswordError = () => {
				throw new Erro401("Email/senha incorretos!");
			};

			if (!(await storeSessionSchema.isValid(req.body))) {
				throwEmailPasswordError();
			}

			const user = await User.findOne({ where: { email } });
			if (!user) {
				throwEmailPasswordError();
			}

			if (!(await user.checkPassword(password))) {
				throwEmailPasswordError();
			}

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
			return next(e);
		}
	}
}

export default new SessionController();
