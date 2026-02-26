import Sequelize, { Model } from "sequelize";

class UserProfile extends Model {
	static init(sequelize) {
		super.init(
			{
				userId: {
					type: Sequelize.UUID,
					field: "user_id",
				},
				birthDate: {
					type: Sequelize.DATEONLY,
					field: "birth_date",
				},
				susCard: {
					type: Sequelize.STRING(20),
					field: "sus_card",
				},
				bloodType: {
					type: Sequelize.ENUM(
						"A+",
						"A-",
						"B+",
						"B-",
						"AB+",
						"AB-",
						"O+",
						"O-",
					),
					field: "blood_type",
				},
				address: Sequelize.STRING,
				neighborhood: Sequelize.STRING,
				cep: Sequelize.STRING(10),
				city: Sequelize.STRING,
				uf: Sequelize.STRING(2),
			},
			{
				sequelize,
				tableName: "user_profiles",
			},
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
	}
}

export default UserProfile;
