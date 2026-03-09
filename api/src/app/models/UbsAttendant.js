import Sequelize, { Model } from "sequelize";

class UbsAttendant extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: Sequelize.UUID,
					defaultValue: Sequelize.UUIDV4,
					primaryKey: true,
				},
				ubsId: {
					type: Sequelize.UUID,
					field: "ubs_id",
				},
				attendantProfileId: {
					type: Sequelize.UUID,
					field: "attendant_profile_id",
				},
			},
			{
				sequelize,
				tableName: "ubs_attendants",
			},
		);

		return this;
	}
}

export default UbsAttendant;
