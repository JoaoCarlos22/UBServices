import Sequelize, { Model } from "sequelize";

class UbsWorkRequest extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: Sequelize.UUID,
					defaultValue: Sequelize.UUIDV4,
					primaryKey: true,
				},
				userId: {
					type: Sequelize.UUID,
					field: "user_id",
				},
				ubsId: {
					type: Sequelize.UUID,
					field: "ubs_id",
				},
				workerRole: {
					type: Sequelize.ENUM("MEDICO", "ATENDENTE"),
					field: "worker_role",
				},
				status: {
					type: Sequelize.ENUM("PENDENTE", "APROVADA", "REJEITADA"),
					defaultValue: "PENDENTE",
				},
				message: Sequelize.TEXT,
				resumeOriginalName: {
					type: Sequelize.STRING,
					field: "resume_original_name",
				},
				resumeFileName: {
					type: Sequelize.STRING,
					field: "resume_file_name",
				},
				resumeMimeType: {
					type: Sequelize.STRING,
					field: "resume_mime_type",
				},
				resumeSize: {
					type: Sequelize.INTEGER,
					field: "resume_size",
				},
				reviewedByUserId: {
					type: Sequelize.UUID,
					field: "reviewed_by_user_id",
				},
				reviewedAt: {
					type: Sequelize.DATE,
					field: "reviewed_at",
				},
				adminMessage: {
					type: Sequelize.TEXT,
					field: "admin_message",
				},
			},
			{
				sequelize,
				tableName: "ubs_work_requests",
			},
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, {
			foreignKey: "userId",
			as: "requester",
		});

		this.belongsTo(models.Ubs, {
			foreignKey: "ubsId",
			as: "ubs",
		});

		this.belongsTo(models.User, {
			foreignKey: "reviewedByUserId",
			as: "reviewer",
		});
	}
}

export default UbsWorkRequest;
