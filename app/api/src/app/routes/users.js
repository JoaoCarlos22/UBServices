import { Router } from "express";
import UserController from "../controllers/UserController";

const routes = new Router()

// cria um novo objeto User
routes.post('/cadUser', UserController.store)

export default routes