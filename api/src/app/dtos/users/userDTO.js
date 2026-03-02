export const userDTO = (user) => {
	const data = user?.get ? user.get({ plain: true }) : user;

	return {
		id: data.id,
		name: data.name,
		email: data.email,
		role: data.role.toLowerCase(),
		createdAt: data.createdAt,
	};
};
