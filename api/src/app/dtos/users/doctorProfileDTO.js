export const doctorProfileDTO = (profile) => {
	const data = profile?.get ? profile.get({ plain: true }) : profile;

	return {
		id: data.id,
		userId: data.userId,
		crm: data.crm,
		crmUf: data.crmUf,
		specialty: data.specialty,
		createdAt: data.createdAt,
	};
};
