"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("users", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password_hash: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			cpf: {
				type: Sequelize.STRING(14),
				allowNull: false,
				unique: true,
			},
			phone: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			role: {
				type: Sequelize.ENUM("ADMIN", "MEDICO", "ATENDENTE", "PACIENTE"),
				allowNull: false,
				defaultValue: "PACIENTE",
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

	// função que desfaz algo do 'up'
	async down(queryInterface) {
		await queryInterface.dropTable("users");
	},
};
