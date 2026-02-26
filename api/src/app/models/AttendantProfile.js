import Sequelize, { Model } from "sequelize";

class AttendantProfile extends Model {
	static init(sequelize) {
		super.init(
			{
				userId: {
					type: Sequelize.UUID,
					field: "user_id",
				},
			},
			{
				sequelize,
				tableName: "attendant_profiles",
			},
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: "userId", as: "user" });

		this.belongsToMany(models.Ubs, {
			through: models.UbsAttendant,
			foreignKey: "attendantProfileId",
			otherKey: "ubsId",
			as: "ubs",
		});
	}
}

export default AttendantProfile;
