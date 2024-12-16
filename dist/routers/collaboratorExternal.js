import express from 'express';
import { handleError } from '../middlewares/HandleError.js';
import { ControllerCollaboratorExterno } from '../controllers/CollaboratorExterno.js';
const routeExt = express.Router();
routeExt.get("/:id", ControllerCollaboratorExterno.getUniqueCollExt);
routeExt.get('/AllCollaborators', ControllerCollaboratorExterno.getAllCollExt);
routeExt.post("/registrar", ControllerCollaboratorExterno.createColExt);
routeExt.delete("/deletar/:id", ControllerCollaboratorExterno.deleteColaborator);
routeExt.use(handleError);
export default routeExt;
//# sourceMappingURL=collaboratorExternal.js.map