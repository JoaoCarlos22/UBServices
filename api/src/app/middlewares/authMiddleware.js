import jwt from "jsonwebtoken";
import Erro401 from "../errors/Erro401.js";

// verifica o token jwt presente no header e valida a sessão do usuário
export const isAuthenticated = (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader) {
			throw new Erro401("Token nao fornecido!");
		}

		const [scheme, token] = authHeader.split(" ");
		if (scheme !== "Bearer" || !token) {
			throw new Erro401("Token mal formatado!");
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.auth = {
			id: decoded.id,
			role: decoded.role,
		};

		return next();
	} catch (error) {
		return next(error);
	}
};
