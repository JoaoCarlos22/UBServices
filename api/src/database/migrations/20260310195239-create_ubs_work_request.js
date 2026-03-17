"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("ubs_work_requests", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			user_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: "users",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			ubs_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: "ubs",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			worker_role: {
				type: Sequelize.ENUM("MEDICO", "ATENDENTE"),
				allowNull: false,
			},
			status: {
				type: Sequelize.ENUM("PENDENTE", "APROVADA", "REJEITADA"),
				allowNull: false,
				defaultValue: "PENDENTE",
			},
			message: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			resume_original_name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			resume_file_name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			resume_mime_type: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			resume_size: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			reviewed_by_user_id: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: "users",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			},
			reviewed_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			admin_message: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.fn("NOW"),
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.fn("NOW"),
			},
		});

		await queryInterface.addIndex("ubs_work_requests", ["ubs_id", "status"], {
			name: "idx_ubs_work_requests_ubs_id_status",
		});

		await queryInterface.addIndex("ubs_work_requests", ["user_id"], {
			name: "idx_ubs_work_requests_user_id",
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable("ubs_work_requests");
	},
};
