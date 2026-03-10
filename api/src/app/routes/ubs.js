import { Router } from "express";
import UbsController from "../controllers/UbsController.js";

const routes = new Router();

routes.get("/search", UbsController.search);

export default routes;
