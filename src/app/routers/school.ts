import { Router } from "express";
import { authentication } from "../middlewares/AuthMiddleware.js";
import { hasPermission } from "../middlewares/hasPermission.js";
import { SchoolController } from "../controllers/SchoolController.js";
import { SchoolMiddleware } from "../middlewares/SchoolMiddelware.js";
export const schoolRoute = Router();
schoolRoute.post(
  "/registros",
  SchoolMiddleware.schoolValidator.bind(SchoolMiddleware),
  SchoolController.setSchool.bind(SchoolController)
);
