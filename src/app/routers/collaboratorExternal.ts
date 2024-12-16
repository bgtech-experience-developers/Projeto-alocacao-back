import express from 'express';
import { handleError } from '../middlewares/HandleError.js';
import { ControllerCollaboratorExterno } from '../controllers/CollaboratorExterno.js';

const routeExt = express.Router();

routeExt.get("/:id", ControllerCollaboratorExterno.getUniqueCollExt);
routeExt.post("/registrar", ControllerCollaboratorExterno.createColExt);

routeExt.use(handleError);

export default routeExt;