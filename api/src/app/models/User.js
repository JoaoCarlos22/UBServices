import Sequelize, { Model } from "sequelize";
import bcrypt from "bcrypt";

// modelo de User com seus atributos
class User extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				role: Sequelize.ENUM("ADMIN", "MEDICO", "ATENDENTE", "PACIENTE"),
				password: Sequelize.VIRTUAL,
				password_hash: Sequelize.STRING,
			},
			{
				sequelize,
			},
		);

		// antes de salvar, a senha é criptografada
		this.addHook("beforeSave", async (user) => {
			if (user.password) {
				user.password_hash = await bcrypt.hash(user.password, 10);
			}
		});
		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password_hash);
	}
}

export default User;
