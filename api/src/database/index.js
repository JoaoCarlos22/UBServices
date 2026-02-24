import { Sequelize } from "sequelize";

// importar os models e config
import User from "../app/models/User.js";
import configDB from "../config/database.js";

// armazena todos os models
const models = [User];

// ao instanciar a classe, irá inicializar todos os models para a realização dos migrations
class Database {
	constructor() {
		this.init();
	}
	init() {
		const env = process.env.NODE_ENV || "development";
		this.connection = new Sequelize(configDB[env]);
		models.map((model) => model.init(this.connection));
		console.log("Banco de dados conectado com sucesso.");
	}
}

export default new Database();
