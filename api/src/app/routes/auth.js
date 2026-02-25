import { Router } from "express";
import SessionController from "../controllers/SessionController.js";

const routes = new Router();

routes.post("/login", SessionController.store);
routes.get("/logout", SessionController.destroy);

export default routes;
