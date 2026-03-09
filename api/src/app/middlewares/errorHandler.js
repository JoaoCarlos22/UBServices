import { ValidationError } from "yup";
import Erro400 from "../errors/Erro400.js";
import Erro401 from "../errors/Erro401.js";
import ErroBase from "../errors/ErroBase.js";

const normalizeError = (error) => {
	if (error instanceof ErroBase) {
		return error;
	}

	if (error instanceof ValidationError) {
		return new Erro400("Erro de validacao", error.errors);
	}

	if (
		error?.name === "JsonWebTokenError" ||
		error?.name === "TokenExpiredError"
	) {
		return new Erro401("Token invalido ou expirado");
	}

	if (error?.name === "SequelizeValidationError") {
		const details = error.errors?.map((item) => item.message) || [];
		return new Erro400("Erro de validacao", details);
	}

	return error;
};

const errorHandler = (error, req, res, next) => {
	if (res.headersSent) {
		return next(error);
	}

	const mappedError = normalizeError(error);

	const status = mappedError?.status || 500;
	const details = mappedError?.details;
	const message = mappedError?.message || "Erro interno do servidor";

	if (status >= 500) {
		console.error(mappedError);
	}

	if (Array.isArray(details) && details.length > 0) {
		return res.status(status).json({ error: details });
	}

	if (typeof details === "string" && details.length > 0) {
		return res.status(status).json({ error: details });
	}

	return res.status(status).json({ error: message });
};

export default errorHandler;
