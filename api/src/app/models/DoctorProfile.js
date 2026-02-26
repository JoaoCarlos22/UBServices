import Sequelize, { Model } from "sequelize";

class DoctorProfile extends Model {
	static init(sequelize) {
		super.init(
			{
				userId: {
					type: Sequelize.UUID,
					field: "user_id",
				},
				crm: Sequelize.STRING(20),
				crmUf: {
					type: Sequelize.STRING(2),
					field: "crm_uf",
				},
				specialty: Sequelize.STRING,
			},
			{
				sequelize,
				tableName: "doctor_profiles",
			},
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: "userId", as: "user" });

		this.belongsToMany(models.Ubs, {
			through: models.UbsDoctor,
			foreignKey: "doctorProfileId",
			otherKey: "ubsId",
			as: "ubs",
		});
	}
}

export default DoctorProfile;
