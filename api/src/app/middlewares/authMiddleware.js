import jwt from "jsonwebtoken";

// verifica o token jwt presente no header e valida a sessão do usuário
export const isAuthenticated = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ error: "Token não fornecido!" });
	}

	const [scheme, token] = authHeader.split(" ");
	if (scheme !== "Bearer" || !token) {
		return res.status(401).json({ error: "Token mal formatado!" });
	}

	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	req.auth = {
		id: decoded.id,
		role: decoded.role,
	};
	next();
};
