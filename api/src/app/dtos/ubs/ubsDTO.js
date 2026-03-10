import { removeNullish } from "../../utils/nullUtils.js";
import { adminProfileDTO } from "../users/adminProfileDTO.js";

export const ubsDTO = (ubs, admin = null) => {
	const ubsData = ubs?.get ? ubs.get({ plain: true }) : ubs;
	const adminData = admin ? admin.get({ plain: true }) : null;

	return removeNullish({
		id: ubsData.id,
		name: ubsData.name,
		cnes: ubsData.cnes,
		cnpj: ubsData.cnpj,
		address: ubsData.address,
		neighborhood: ubsData.neighborhood,
		cep: ubsData.cep,
		city: ubsData.city,
		uf: ubsData.uf,
		phone: ubsData.phone,
		email: ubsData.email,
		openingHours: ubsData.openingHours,
		website: ubsData.website,
		description: ubsData.description,
		services: ubsData.services,
		createdAt: ubsData.createdAt,
		createdBy: adminData ? adminProfileDTO(adminData) : undefined,
	});
};
