import express from "express";
import { CollaboratorInner } from "../middlewares/GlobalValidation.js";
import { handleError } from "../middlewares/HandleError.js";
export const route = express.Router();
route.get("/buscar", CollaboratorInner);
route.post("/criar", CollaboratorInner);
route.delete("/deletar", CollaboratorInner);
route.use(handleError);
//# sourceMappingURL=collaborator.js.map