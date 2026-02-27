const removeNullish = (obj) =>
	Object.fromEntries(
		Object.entries(obj).filter(
			([, value]) => value !== null && value !== undefined,
		),
	);

export const userProfileDTO = (profile) => {
	const data = profile?.get ? profile.get({ plain: true }) : profile;

	return removeNullish({
		birthDate: data.birthDate,
		susCard: data.susCard,
		bloodType: data.bloodType,
		address: data.address,
		neighborhood: data.neighborhood,
		cep: data.cep,
		city: data.city,
		uf: data.uf,
		createdAt: data.createdAt,
	});
};
