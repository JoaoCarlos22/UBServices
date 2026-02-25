"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameTable("Users", "users");

		await queryInterface.renameColumn("users", "createdAt", "created_at");
		await queryInterface.renameColumn("users", "updatedAt", "updated_at");

		await queryInterface.addColumn("users", "role", {
			type: Sequelize.ENUM("ADMIN", "MEDICO", "ATENDENTE", "PACIENTE"),
			allowNull: false,
			defaultValue: "PACIENTE",
		});
	},

	async down(queryInterface) {
		await queryInterface.removeColumn("users", "role");
		await queryInterface.renameColumn("users", "created_at", "createdAt");
		await queryInterface.renameColumn("users", "updated_at", "updatedAt");
		await queryInterface.renameTable("users", "Users");
	},
};
