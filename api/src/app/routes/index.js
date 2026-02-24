import { Router } from "express";
import authRoutes from "../routes/auth.js";
import userRoutes from "../routes/users.js";
import visitaRoutes from "../routes/visitas.js";

const routes = new Router();

routes.use("/", authRoutes);
routes.use("/", userRoutes);
routes.use("/", visitaRoutes);

export default routes;
