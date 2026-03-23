import * as Yup from "yup";

export const storeUbsWorkRequestSchema = Yup.object().shape({
	ubsId: Yup.string()
		.required("O campo 'ubsId' é obrigatório!")
		.uuid("O campo 'ubsId' deve ser um UUID válido!"),
	message: Yup.string()
		.max(1200, "A mensagem deve ter no máximo 1200 caracteres.")
		.nullable(),
});
