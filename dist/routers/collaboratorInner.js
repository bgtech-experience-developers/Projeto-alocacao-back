import express from "express";
import { ValidatorCreate } from "../middlewares/GlobalValidation.js";
import { handleError } from "../middlewares/HandleError.js";
import { CollaboratorInterno } from "../controllers/CollaboratorInterno.js";
export const route = express.Router();
route.get("/buscar");
route.post("/criar", ValidatorCreate.createCollaboratorInner, new CollaboratorInterno().createCollaboratorInner);
route.delete("/deletar");
route.use(handleError);
//# sourceMappingURL=collaboratorInner.js.map