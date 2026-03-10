import { Router } from "express";
import { isUser } from "../middlewares/roleMiddleware.js";
import UserController from "../controllers/UserController.js";

const routes = new Router();

routes.use(isUser);

// cria um novo objeto User
routes.get("/me", UserController.show);

export default routes;
