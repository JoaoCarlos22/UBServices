import { removeNullish } from "../../utils/nullUtils.js";

export const doctorProfileDTO = (profile, user) => {
	const profileData = profile?.get ? profile.get({ plain: true }) : profile;
	const userData = user?.get ? user.get({ plain: true }) : user;

	return removeNullish({
		id: profileData.userId,
		name: userData.name,
		email: userData.email,
		cpf: userData.cpf,
		phone: userData.phone,
		crm: profileData.crm,
		crmUf: profileData.crmUf,
		specialty: profileData.specialty,
		createdAt: profileData.createdAt,
	});
};
