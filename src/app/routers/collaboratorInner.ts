import express, { response } from "express";
import { ValidatorCollaboratorInner } from "../middlewares/GlobalValidation.js";
// import { ValidatorCreate } from "../middlewares/GlobalValidation.js";
import { handleError } from "../middlewares/HandleError.js";
import { ControllerCollaboratorInner } from "../controllers/CollaboratorInterno.js";

export const route = express.Router();
route.get("/", ControllerCollaboratorInner.getAllCollaboratorsInner);
route.post(
  "/registro",
  ValidatorCollaboratorInner.CollaboratorInnerCreate,
  ControllerCollaboratorInner.createCollaboratorInner
);
route.delete(
  "/deletar/:id",
  ValidatorCollaboratorInner.CollaboratorInnerDeleteAndGetUnique,
  ControllerCollaboratorInner.deleteCollaboratorInner
);

route.get(
  "/:id",
  ValidatorCollaboratorInner.CollaboratorInnerDeleteAndGetUnique,
  ControllerCollaboratorInner.getUniqueCollaboratorInner
);
route.patch("/atualizar", () => {
  "futuramente vc me aguarda";
});
route.use(handleError);
