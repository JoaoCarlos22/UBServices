import express from "express";
import cors from "cors";
import path from "path";
import routes from "./app/routes/index.js";
import Erro404 from "./app/errors/Erro404.js";
import errorHandler from "./app/middlewares/errorHandler.js";

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
		//this.app.use(cors());
		this.app.use(express.json());
		this.app.use(
			"/uploads",
			express.static(path.resolve(process.cwd(), "uploads")),
		);
	}

	routes() {
		this.app.use("/api", routes);
		this.app.use((req, res, next) => {
			next(new Erro404("Rota nao encontrada"));
		});
		this.app.use(errorHandler);
	}
}

export default new App().app;
