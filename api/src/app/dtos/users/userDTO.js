export const userDTO = (user) => {
	const data = user?.get ? user.get({ plain: true }) : user;

	return {
		name: data.name,
		email: data.email,
		cpf: data.cpf,
		phone: data.phone,
		role: data.role.toLowerCase(),
		createdAt: data.createdAt,
	};
};
