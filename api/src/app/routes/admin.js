import { Router } from "express";
import { isAdmin } from "../middlewares/roleMiddleware.js";
import AdminController from "../controllers/AdminController.js";

const routes = new Router();

routes.use(isAdmin);

// cria um novo objeto User
routes.get("/work-requests", AdminController.listWorkRequests);
routes.put("/work-requests/:id/review", AdminController.reviewWorkRequest);
routes.delete("/remove-user/:id", AdminController.removeUser);

export default routes;
