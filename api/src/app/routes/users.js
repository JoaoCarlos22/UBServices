import { Router } from "express";
import UserController from "../controllers/UserController.js";

const routes = new Router();

// cria um novo objeto User
routes.post("/signup", UserController.store);
routes.get("/me", UserController.show);

export default routes;
