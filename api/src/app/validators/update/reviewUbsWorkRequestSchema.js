import * as Yup from "yup";

export const reviewUbsWorkRequestSchema = Yup.object().shape({
	decision: Yup.string()
		.required("O campo 'decision' é obrigatório!")
		.oneOf(["APROVAR", "REJEITAR"], "Decisão inválida!"),
	adminMessage: Yup.string()
		.max(
			1200,
			"A mensagem do administrador deve ter no máximo 1200 caracteres.",
		)
		.nullable(),
});
