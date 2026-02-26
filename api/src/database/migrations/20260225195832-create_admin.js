"use strict";

const bcrypt = require("bcrypt");
const { randomUUID } = require("crypto");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		const adminEmail = process.env.ADMIN_EMAIL || "admin-ubs1@example.com";
		const adminName = process.env.ADMIN_NAME || "Administrador UBS1";
		const adminPassword = process.env.ADMIN_PASSWORD || "123456";

		const [existing] = await queryInterface.sequelize.query(
			`SELECT id FROM users WHERE email = :email LIMIT 1;`,
			{
				replacements: { email: adminEmail },
			},
		);

		if (existing.length > 0) return;

		const passwordHash = await bcrypt.hash(adminPassword, 10);

		await queryInterface.bulkInsert("users", [
			{
				id: randomUUID(),
				name: adminName,
				email: adminEmail,
				password_hash: passwordHash,
				role: "ADMIN",
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	async down(queryInterface) {
		const adminEmail = process.env.ADMIN_EMAIL || "admin-ubs1@example.com";

		await queryInterface.bulkDelete("users", {
			email: adminEmail,
			role: "ADMIN",
		});
	},
};
