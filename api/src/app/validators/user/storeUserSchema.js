import * as Yup from "yup";

export const storeUserSchema = Yup.object().shape({
	name: Yup.string().required("O campo 'nome' é obrigatório!"),
	email: Yup.string()
		.email("Email incorreto!")
		.required("O campo 'email' é obrigatório!"),
	password: Yup.string()
		.required("O campo 'senha' é obrigatório!")
		.min(6, "Digite no mínimo 6 dígitos no campo 'senha'!"),
	role: Yup.string()
		.oneOf(["ADMIN", "MEDICO", "ATENDENTE", "PACIENTE"])
		.default("PACIENTE"),
});
