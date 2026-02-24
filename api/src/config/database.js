export default {
	dialect: "postgres", // qual banco de dados vai ser utilizado
	host: "",
	port: 5432,
	username: "postgres",
	password: "",
	database: "",
	dialectOptions: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	},
};
