import Sequelize, { Model } from "sequelize";

class UbsAdmin extends Model {
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
				userId: {
					type: Sequelize.UUID,
					field: "user_id",
				},
			},
			{
				sequelize,
				tableName: "ubs_admins",
			},
		);

		return this;
	}
}

export default UbsAdmin;
