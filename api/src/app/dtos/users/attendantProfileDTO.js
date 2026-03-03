export const attendantProfileDTO = (profile, user) => {
	const profileData = profile?.get ? profile.get({ plain: true }) : profile;
	const userData = user?.get ? user.get({ plain: true }) : user;

	return {
		id: profileData.userId,
		name: userData.name,
		email: userData.email,
		cpf: userData.cpf,
		phone: userData.phone,
		createdAt: profileData.createdAt,
	};
};
