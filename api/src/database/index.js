import { Sequelize } from "sequelize";
import configDB from "../config/database.js";
import models from "../app/models/index.js";

class Database {
	constructor() {
		this.init();
	}

	init() {
		const env = process.env.NODE_ENV || "development";
		this.connection = new Sequelize(configDB[env]);

		models.forEach((model) => model.init(this.connection));
		models.forEach((model) => {
			if (model.associate) {
				model.associate(this.connection.models);
			}
		});

		console.log("Banco de dados conectado com sucesso.");
	}
}

export default new Database();
