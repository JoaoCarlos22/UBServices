import { v4 } from "uuid";
import User from "../models/User.js";
import Erro400 from "../errors/Erro400.js";
import { storeUserSchema } from "../validators/store/storeUserSchema.js";

export async function createUserProfile({ payload, role, createProfile }) {
	if (typeof createProfile !== "function") {
		throw new Erro400("Funcao de criacao de perfil nao informada");
	}

	const { name, email, password, cpf, phone } = await storeUserSchema.validate(
		payload,
		{
			abortEarly: false,
		},
	);

	const [emailExists, cpfExists] = await Promise.all([
		User.findOne({ where: { email } }),
		User.findOne({ where: { cpf } }),
	]);

	if (emailExists) {
		throw new Erro400("Email do usuário já cadastrado!");
	}

	if (cpfExists) {
		throw new Erro400("CPF do usuário já cadastrado!");
	}

	const transaction = await User.sequelize.transaction();

	try {
		const user = await User.create(
			{
				id: v4(),
				name,
				email,
				password,
				cpf,
				phone,
				role,
			},
			{ transaction },
		);

		const profileData =
			(await createProfile({ user, transaction, payload })) || {};

		await transaction.commit();

		return { user, ...profileData };
	} catch (error) {
		await transaction.rollback();
		throw error;
	}
}
