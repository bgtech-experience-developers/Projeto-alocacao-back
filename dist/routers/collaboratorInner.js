import express from "express";
import { ValidatorCollaboratorInner } from "../middlewares/GlobalValidation.js";
// import { ValidatorCreate } from "../middlewares/GlobalValidation.js";
import { handleError } from "../middlewares/HandleError.js";
import { ControllerCollaboratorInner } from "../controllers/CollaboratorInterno.js";
export const route = express.Router();
route.get("/buscarTodos", ControllerCollaboratorInner.getAllCollaborators);
route.post("/criar", ValidatorCollaboratorInner.CollaboratorInnerCreate, ControllerCollaboratorInner.createCollaboratorInner);
route.delete("/deletar/:id", ValidatorCollaboratorInner.CollaboratorInnerDeleteAndGetUnique, ControllerCollaboratorInner.DeleteUniqueCollaborator);
route.get("/unico/:id", ValidatorCollaboratorInner.CollaboratorInnerDeleteAndGetUnique, ControllerCollaboratorInner.GetUniqueCollaborator);
route.patch("/atualizar", () => {
    "futuramente vc me aguarda";
});
route.use(handleError);
//# sourceMappingURL=collaboratorInner.js.map