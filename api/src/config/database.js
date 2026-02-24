require("dotenv/config");

const baseConfig = {
	dialect: "postgres", // qual banco de dados vai ser utilizado
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	},
};

module.exports = {
	development: { ...baseConfig },
	test: { ...baseConfig },
	production: { ...baseConfig },
};
