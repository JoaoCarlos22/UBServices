import * as Yup from "yup";

export const storeSessionSchema = Yup.object().shape({
	email: Yup.string()
		.email("Email incorreto!")
		.required("O campo 'email' é obrigatório!"),
	password: Yup.string().required("O campo 'senha' é obrigatório!"),
});
