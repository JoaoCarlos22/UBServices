import * as Yup from "yup";

export const storeUbsSchema = Yup.object().shape({
	nameUbs: Yup.string().required("O campo 'nome' é obrigatório!"),
	cnes: Yup.string().matches(
		/^\d{7}$/,
		"O campo 'cnes' deve conter apenas números (7 dígitos).",
	),
	cnpj: Yup.string().matches(
		/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
		"O campo 'cnpj' deve conter apenas números. Ex.: 12.345.678/0001-90",
	),
	address: Yup.string().required("O campo 'endereço' é obrigatório!"),
	neighborhood: Yup.string().required("O campo 'bairro' é obrigatório!"),
	cep: Yup.string()
		.required("O campo 'cep' é obrigatório!")
		.matches(
			/^\d{5}\-\d{3}$/,
			"O campo 'cep' deve conter apenas números. Ex.: 12345-678",
		),
	city: Yup.string().required("O campo 'cidade' é obrigatório!"),
	uf: Yup.string()
		.required("O campo 'uf' é obrigatório!")
		.length(2, "O campo 'uf' deve conter exatamente 2 caracteres!"),
	phoneUbs: Yup.string()
		.required("O campo 'telefone' é obrigatório!")
		.matches(
			/^\(\d{2}\)\s?\d{5}-\d{4}$/,
			"Telefone inválido! Ex.: (11) 98888-7777",
		),
	emailUbs: Yup.string().nullable().email("Email inválido!"),
	openingHours: Yup.string().nullable(),
	website: Yup.string().nullable().url("URL inválida!"),
	services: Yup.array()
		.nullable()
		.of(
			Yup.string().oneOf(
				[
					"Clínica Geral",
					"Pediatria",
					"Ginecologia",
					"Cardiologia",
					"Dermatologia",
					"Ortopedia",
					"Psicologia",
					"Psiquiatria",
					"Vacinação",
					"Odontologia",
					"Fisioterapia",
					"Nutrição",
					"Farmácia",
					"Enfermagem",
					"Coleta de Exames",
					"Curativos",
				],
				"Serviço(s) inválido(s): ${value}", // exibe o(s) serviço(s) inserido(s) inválido(s)
			),
		),
});
