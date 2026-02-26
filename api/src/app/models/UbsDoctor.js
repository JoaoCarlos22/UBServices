import Sequelize, { Model } from "sequelize";

class UbsDoctor extends Model {
	static init(sequelize) {
		super.init(
			{
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
