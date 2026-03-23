import { Router } from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import authRoutes from "../routes/auth.js";
import userRoutes from "../routes/users.js";
import ubsRoutes from "../routes/ubs.js";
import visitaRoutes from "../routes/visitas.js";
import workRequestRoutes from "../routes/workRequests.js";

const routes = new Router();

routes.use("/", authRoutes);
routes.use(isAuthenticated);
routes.use("/ubs", ubsRoutes);
routes.use("/work-requests", workRequestRoutes);
routes.use("/", userRoutes);
routes.use("/", visitaRoutes);

export default routes;
