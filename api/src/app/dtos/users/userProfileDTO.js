import { removeNullish } from "../../utils/nullUtils.js";

export const userProfileDTO = (profile, user) => {
	const profileData = profile?.get ? profile.get({ plain: true }) : profile;
	const userData = user?.get ? user.get({ plain: true }) : user;

	return removeNullish({
		id: profileData.userId,
		name: userData.name,
		email: userData.email,
		cpf: userData.cpf,
		phone: userData.phone,
		birthDate: profileData.birthDate,
		susCard: profileData.susCard,
		bloodType: profileData.bloodType,
		address: profileData.address,
		neighborhood: profileData.neighborhood,
		cep: profileData.cep,
		city: profileData.city,
		uf: profileData.uf,
		createdAt: profileData.createdAt,
	});
};
