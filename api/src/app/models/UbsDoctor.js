import Sequelize, { Model } from "sequelize";

class UbsDoctor extends Model {
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
				doctorProfileId: {
					type: Sequelize.UUID,
					field: "doctor_profile_id",
				},
			},
			{
				sequelize,
				tableName: "ubs_doctors",
			},
		);

		return this;
	}
}

export default UbsDoctor;
