import Sequelize, { Model } from "sequelize";
import bcrypt from "bcrypt";

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				cpf: Sequelize.STRING,
				phone: Sequelize.STRING,
				role: Sequelize.ENUM("ADMIN", "MEDICO", "ATENDENTE", "PACIENTE"),
				password: Sequelize.VIRTUAL,
				password_hash: Sequelize.STRING,
			},
			{
				sequelize,
				tableName: "users",
			},
		);

		this.addHook("beforeSave", async (user) => {
			if (user.password) {
				user.password_hash = await bcrypt.hash(user.password, 10);
			}
		});

		return this;
	}

	static associate(models) {
		this.hasOne(models.UserProfile, { foreignKey: "userId", as: "profile" });
		this.hasOne(models.DoctorProfile, {
			foreignKey: "userId",
			as: "doctorProfile",
		});
		this.hasOne(models.AttendantProfile, {
			foreignKey: "userId",
			as: "attendantProfile",
		});

		this.hasMany(models.Ubs, {
			foreignKey: "createdByUserId",
			as: "createdUbs",
		});
		this.belongsToMany(models.Ubs, {
			through: models.UbsAdmin,
			foreignKey: "userId",
			otherKey: "ubsId",
			as: "adminUbs",
		});
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password_hash);
	}
}

export default User;
