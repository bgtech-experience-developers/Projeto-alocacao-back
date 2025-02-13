import { Router } from "express";
export const adminRouter = Router();
import { AdminController } from "../controllers/AdminCollaborator.js";
import { ValidatorCollaboratorInner } from "../middlewares/GlobalValidation.js";
const { login, create } = new AdminController();
adminRouter.post("/login", ValidatorCollaboratorInner.loginValidation, login);
adminRouter.post("/registro", ValidatorCollaboratorInner.createAdm, create());
