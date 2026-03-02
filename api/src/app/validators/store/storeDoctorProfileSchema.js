import * as Yup from "yup";

export const storeDoctorProfileSchema = Yup.object().shape({
	crm: Yup.string()
		.required("O campo 'crm' é obrigatório!")
		.matches(
			/^\d{1,6}$/,
			"O campo 'crm' deve conter apenas números (até 6 dígitos).",
		),
	crmUf: Yup.string().max(2).required("O campo 'crmUf' é obrigatório!"),
	specialty: Yup.string().nullable(),
});
