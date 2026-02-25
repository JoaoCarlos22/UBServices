export const userDTO = (user) => {
	const data = user?.get ? user.get({ plain: true }) : user;

	return {
		name: data.name,
		email: data.email,
		role: data.role.toLowerCase(),
		createdAt: data.createdAt,
	};
};
