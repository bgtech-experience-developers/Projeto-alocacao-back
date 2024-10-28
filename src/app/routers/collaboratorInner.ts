import express, { response } from "express";
import { ValidatorCollaboratorInner } from "../middlewares/GlobalValidation.js";
// import { ValidatorCreate } from "../middlewares/GlobalValidation.js";
import { handleError } from "../middlewares/HandleError.js";
import { ControllerCollaboratorInner } from "../controllers/CollaboratorInterno.js";
import { Request, Response } from "express";
export const route = express.Router();
route.get("/buscarTodos", ControllerCollaboratorInner.getAllCollaborators);
route.post(
  "/criar",
  ValidatorCollaboratorInner.CollaboratorInnerCreate,
  ControllerCollaboratorInner.createCollaboratorInner
);
route.delete(
  "/deletar/:id",
  ValidatorCollaboratorInner.CollaboratorInnerDelete,
  ControllerCollaboratorInner.DeleteUniqueCollaborator
);
route.get("/unico/:id", ControllerCollaboratorInner.GetUniqueCollaborator);
route.use(handleError);
