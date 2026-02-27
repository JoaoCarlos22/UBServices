import * as Yup from "yup";

export const storeUserProfileSchema = Yup.object().shape({
	userId: Yup.string()
		.uuid("ID de usuário inválido!")
		.required("O campo 'userId' é obrigatório!"),
	birthDate: Yup.date(
		"Data de nascimento inválida! Ex.: 01/01/2000",
	).nullable(),
	susCard: Yup.string()
		.nullable()
		.matches(/^\d{15}$/, "SUS inválido! Use apenas números (15 dígitos)."),
	bloodType: Yup.string()
		.oneOf(
			["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
			"Tipo sanguíneo inválido!",
		)
		.nullable(),
	address: Yup.string(
		"O endereço deve ser uma string! Ex.: Rua Exemplo, 123",
	).nullable(),
	neighborhood: Yup.string(
		"O bairro deve ser uma string! Ex.: Centro",
	).nullable(),
	cep: Yup.string()
		.matches(/^\d{5}-?\d{3}$/, "CEP inválido! Use 00000-000")
		.nullable(),
	city: Yup.string("A cidade deve ser uma string! Ex.: São Paulo").nullable(),
	uf: Yup.string("O estado deve ser uma string! Ex.: SP").max(2).nullable(),
});
