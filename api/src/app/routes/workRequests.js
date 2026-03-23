import { Router } from "express";
import WorkRequestController from "../controllers/WorkRequestController.js";
import { uploadResume } from "../middlewares/uploadResumeMiddleware.js";

const routes = new Router();

routes.post("/", uploadResume.single("resume"), WorkRequestController.store);
/* routes.get("/work-requests/my", UbsWorkRequestController.listMy);
routes.get("/admin/work-requests", UbsWorkRequestController.listForAdmin);
routes.patch(
	"/admin/work-requests/:requestId/decision",
	UbsWorkRequestController.decide,
); */

export default routes;
