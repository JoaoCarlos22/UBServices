import { Router } from "express";
import SessionController from "../controllers/SessionController.js";
import UserController from "../controllers/UserController.js";

const routes = new Router();

routes.post("/login", SessionController.store);
routes.get("/logout", SessionController.destroy);
routes.post("/signup/patient", UserController.store);
/* routes.post("/signup/doctor", DoctorController.store);
routes.post("/signup/attendant", AttendantController.store);
routes.post("/signup/admin", AdminController.store); */

export default routes;
