import { Router } from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import UserController from "../controllers/UserController.js";

const routes = new Router();

routes.use(isAuthenticated);

// cria um novo objeto User
routes.get("/me", UserController.show);

export default routes;
