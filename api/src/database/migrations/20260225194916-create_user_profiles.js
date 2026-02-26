"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("user_profiles", {
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
			birth_date: {
				type: Sequelize.DATEONLY,
				allowNull: true,
			},
			sus_card: {
				type: Sequelize.STRING(20),
				allowNull: true,
				unique: true,
			},
			blood_type: {
				type: Sequelize.ENUM("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"),
				allowNull: true,
			},
			address: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			neighborhood: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			cep: {
				type: Sequelize.STRING(10),
				allowNull: true,
			},
			city: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			uf: {
				type: Sequelize.STRING(2),
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
	},

	async down(queryInterface) {
		await queryInterface.dropTable("user_profiles");
	},
};
