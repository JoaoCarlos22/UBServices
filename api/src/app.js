import express from "express";
import routesGlobal from "./app/routes/global.js";
import routesUser from "./app/routes/users.js";

// invoca a insância do banco de dados (inicialização)
import "./database/index.js";

// estrutura da API
class App {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app.use(express.json());
	}

	routes() {
		this.app.use(routesGlobal);
		this.app.use(routesUser);
	}
}

export default new App().app;
