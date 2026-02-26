"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("doctor_profiles", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			user_id: {
				type: Sequelize.UUID,
				allowNull: false,
				unique: true,
				references: {
					model: "users",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			crm: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			crm_uf: {
				type: Sequelize.STRING(2),
				allowNull: false,
			},
			specialty: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});

		await queryInterface.addConstraint("doctor_profiles", {
			fields: ["crm", "crm_uf"],
			type: "unique",
			name: "doctor_profiles_crm_crm_uf_unique",
		});
	},

	async down(queryInterface) {
		await queryInterface.removeConstraint(
			"doctor_profiles",
			"doctor_profiles_crm_crm_uf_unique",
		);
		await queryInterface.dropTable("doctor_profiles");
	},
};
