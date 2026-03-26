import { Router } from "express";
import WorkRequestController from "../controllers/WorkRequestController.js";
import { uploadResume } from "../middlewares/uploadResumeMiddleware.js";

const routes = new Router();

routes.post("/", uploadResume.single("resume"), WorkRequestController.store);
routes.get("/my", WorkRequestController.listMy);

export default routes;
