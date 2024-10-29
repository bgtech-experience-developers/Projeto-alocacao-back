import { Router } from "express";
export const adminRouter = Router();
import { AdminController } from "../controllers/adminCollaborator.js";
import { ValidatorCollaboratorInner } from "../middlewares/GlobalValidation.js";
const { login } = new AdminController();
adminRouter.post("/login", ValidatorCollaboratorInner.loginValidation, login);
