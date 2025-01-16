import { Router } from "express";
export const adminRouter = Router();
import { AdminController } from "../controllers/AdminCollaborator.js";
import { ValidatorCollaboratorInner } from "../middlewares/GlobalValidation.js";
import { handleError } from "../middlewares/HandleError.js";
const { login, create } = new AdminController();
adminRouter.post("/login", ValidatorCollaboratorInner.loginValidation, login);
adminRouter.post("/registro", ValidatorCollaboratorInner.createAdm, create());

adminRouter.use(handleError);
