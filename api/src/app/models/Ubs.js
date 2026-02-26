import Sequelize, { Model } from "sequelize";

const ALLOWED_SERVICES = [
	"Clínica Geral",
	"Pediatria",
	"Ginecologia",
	"Cardiologia",
	"Dermatologia",
	"Ortopedia",
	"Psicologia",
	"Psiquiatria",
	"Vacinação",
	"Odontologia",
	"Fisioterapia",
	"Nutrição",
	"Farmácia",
	"Enfermagem",
	"Coleta de Exames",
	"Curativos",
];

class Ubs extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				cnes: Sequelize.STRING(20),
				cnpj: Sequelize.STRING(18),
				address: Sequelize.STRING,
				neighborhood: Sequelize.STRING,
				cep: Sequelize.STRING(10),
				city: Sequelize.STRING,
				uf: Sequelize.STRING(2),
				phone: Sequelize.STRING(20),
				email: Sequelize.STRING,
				openingHours: {
					type: Sequelize.STRING,
					field: "opening_hours",
				},
				website: Sequelize.STRING,
				description: Sequelize.TEXT,
				services: {
					type: Sequelize.ARRAY(Sequelize.STRING),
					defaultValue: [],
					validate: {
						isAllowedServices(value) {
							if (!Array.isArray(value)) return;
							const invalid = value.filter(
								(item) => !ALLOWED_SERVICES.includes(item),
							);
							if (invalid.length > 0) {
								throw new Error(`Serviços inválidos: ${invalid.join(", ")}`);
							}
						},
					},
				},
				createdByUserId: {
					type: Sequelize.UUID,
					field: "created_by_user_id",
				},
			},
			{
				sequelize,
				tableName: "ubs",
			},
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, {
			foreignKey: "createdByUserId",
			as: "createdBy",
		});

		this.belongsToMany(models.DoctorProfile, {
			through: models.UbsDoctor,
			foreignKey: "ubsId",
			otherKey: "doctorProfileId",
			as: "doctors",
		});

		this.belongsToMany(models.AttendantProfile, {
			through: models.UbsAttendant,
			foreignKey: "ubsId",
			otherKey: "attendantProfileId",
			as: "attendants",
		});

		this.belongsToMany(models.User, {
			through: models.UbsAdmin,
			foreignKey: "ubsId",
			otherKey: "userId",
			as: "admins",
		});
	}
}

export default Ubs;
