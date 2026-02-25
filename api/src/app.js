import express from "express";
import session from "express-session";
import routes from "./app/routes/index.js";
import { sessionConfig } from "./config/session.js";

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
		this.app.use(session(sessionConfig));
	}

	routes() {
		this.app.use(routes);
	}
}

export default new App().app;
