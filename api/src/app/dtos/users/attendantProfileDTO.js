export const attendantProfileDTO = (profile) => {
	const data = profile?.get ? profile.get({ plain: true }) : profile;

	return {
		id: data.id,
		userId: data.userId,
		createdAt: data.createdAt,
	};
};
