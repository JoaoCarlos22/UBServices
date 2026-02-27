import * as Yup from "yup";

export const storeUserSchema = Yup.object().shape({
	name: Yup.string().required("O campo 'nome' é obrigatório!"),
	email: Yup.string()
		.email("Email incorreto!")
		.required("O campo 'email' é obrigatório!"),
	password: Yup.string()
		.required("O campo 'senha' é obrigatório!")
		.min(6, "Digite no mínimo 6 dígitos no campo 'senha'!"),

	cpf: Yup.string()
		.required("O campo 'cpf' é obrigatório!")
		.matches(
			/^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
			"CPF inválido! Ex.: 000.000.000-00",
		),

	phone: Yup.string()
		.required("O campo 'telefone' é obrigatório!")
		.matches(
			/^\(\d{2}\)\s?\d{5}-\d{4}$/,
			"Telefone inválido! Ex.: (11) 98888-7777",
		),
});
