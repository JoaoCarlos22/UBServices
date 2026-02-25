import { Router } from "express";
import UserController from "../controllers/UserController.js";

const routes = new Router();

// cria um novo objeto User
routes.post("/signup", UserController.store);

export default routes;
