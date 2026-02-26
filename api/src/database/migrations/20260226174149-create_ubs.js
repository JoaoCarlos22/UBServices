"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("ubs", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},

			// obrigatórios
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			cnes: {
				type: Sequelize.STRING(20),
				allowNull: false,
				unique: true,
			},
			cnpj: {
				type: Sequelize.STRING(18),
				allowNull: false,
				unique: true,
			},
			address: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			neighborhood: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			cep: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			uf: {
				type: Sequelize.STRING(2),
				allowNull: false,
			},
			phone: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},

			// opcionais
			email: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			opening_hours: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			website: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			services: {
				type: Sequelize.ARRAY(Sequelize.STRING),
				allowNull: true,
				defaultValue: [],
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

		await queryInterface.sequelize.query(`
            ALTER TABLE "ubs"
            ADD CONSTRAINT "ck_ubs_services_allowed"
            CHECK (
                "services" IS NULL OR
                "services" <@ ARRAY[
                    'Clínica Geral',
                    'Pediatria',
                    'Ginecologia',
                    'Cardiologia',
                    'Dermatologia',
                    'Ortopedia',
                    'Psicologia',
                    'Psiquiatria',
                    'Vacinação',
                    'Odontologia',
                    'Fisioterapia',
                    'Nutrição',
                    'Farmácia',
                    'Enfermagem',
                    'Coleta de Exames',
                    'Curativos'
                ]::varchar[]
            );
        `);
	},

	async down(queryInterface) {
		await queryInterface.dropTable("ubs");
	},
};
