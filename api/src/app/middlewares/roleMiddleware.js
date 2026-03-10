import Erro403 from "../errors/Erro403.js";

export const isAdmin = (req, res, next) => {
	if (req.auth.role !== "admin") {
		return next(new Erro403("Acesso negado!"));
	}
	return next();
};

export const isUser = (req, res, next) => {
	if (req.auth.role !== "user") {
		return next(new Erro403("Acesso negado!"));
	}
	return next();
};

export const isDoctor = (req, res, next) => {
	if (req.auth.role !== "doctor") {
		return next(new Erro403("Acesso negado!"));
	}
	return next();
};

export const isAttendant = (req, res, next) => {
	if (req.auth.role !== "attendant") {
		return next(new Erro403("Acesso negado!"));
	}
	return next();
};
