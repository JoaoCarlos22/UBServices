export default {
	dialect: "postgres", // qual banco de dados vai ser utilizado
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	dialectOptions: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	},
};
