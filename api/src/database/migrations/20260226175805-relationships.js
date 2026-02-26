"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// 1) Creator da UBS (admin que criou)
		await queryInterface.addColumn("ubs", "created_by_user_id", {
			type: Sequelize.UUID,
			allowNull: true,
			references: {
				model: "users",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});

		await queryInterface.addIndex("ubs", ["created_by_user_id"], {
			name: "idx_ubs_created_by_user_id",
		});

		// 2) Relação UBS <-> Médicos (N:N)
		await queryInterface.createTable("ubs_doctors", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
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
			doctor_profile_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: "doctor_profiles",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
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

		await queryInterface.addConstraint("ubs_doctors", {
			fields: ["ubs_id", "doctor_profile_id"],
			type: "unique",
			name: "uq_ubs_doctors_ubs_id_doctor_profile_id",
		});

		await queryInterface.addIndex("ubs_doctors", ["ubs_id"], {
			name: "idx_ubs_doctors_ubs_id",
		});

		await queryInterface.addIndex("ubs_doctors", ["doctor_profile_id"], {
			name: "idx_ubs_doctors_doctor_profile_id",
		});

		// 3) Relação UBS <-> Atendentes (N:N)
		await queryInterface.createTable("ubs_attendants", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
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
			attendant_profile_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: "attendant_profiles",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
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

		await queryInterface.addConstraint("ubs_attendants", {
			fields: ["ubs_id", "attendant_profile_id"],
			type: "unique",
			name: "uq_ubs_attendants_ubs_id_attendant_profile_id",
		});

		await queryInterface.addIndex("ubs_attendants", ["ubs_id"], {
			name: "idx_ubs_attendants_ubs_id",
		});

		await queryInterface.addIndex("ubs_attendants", ["attendant_profile_id"], {
			name: "idx_ubs_attendants_attendant_profile_id",
		});

		// 4) Extra importante: admins vinculados à UBS (gestão compartilhada)
		await queryInterface.createTable("ubs_admins", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
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

		await queryInterface.addConstraint("ubs_admins", {
			fields: ["ubs_id", "user_id"],
			type: "unique",
			name: "uq_ubs_admins_ubs_id_user_id",
		});

		await queryInterface.addIndex("ubs_admins", ["ubs_id"], {
			name: "idx_ubs_admins_ubs_id",
		});

		await queryInterface.addIndex("ubs_admins", ["user_id"], {
			name: "idx_ubs_admins_user_id",
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable("ubs_admins");
		await queryInterface.dropTable("ubs_attendants");
		await queryInterface.dropTable("ubs_doctors");

		await queryInterface.removeIndex("ubs", "idx_ubs_created_by_user_id");
		await queryInterface.removeColumn("ubs", "created_by_user_id");
	},
};
