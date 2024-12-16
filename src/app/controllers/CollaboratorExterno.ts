import { ServiceCollaboratorExternal } from "../services/ServiceCollaborator.js";
import { Request, Response, NextFunction} from "express";

export class ControllerCollaboratorExterno {
    static async createColExt(request: Request, response: Response, next: NextFunction) {
        try {
            const collaborator = await ServiceCollaboratorExternal.createColl(request.body);
            console.log(request.body, "Corpo chega no controller");
            
            response.status(201).json("Colaborador cadastrado com sucesso! ");

        } catch (error) {
           next(error); 
        }
    };

    static async getAllCollExt(request: Request, response: Response, next: NextFunction) {
        try {
            const query = request.query;
            const status = query.status? (query.status as string): null;
            const page = Number(query)
        } catch (error) {
            
        }
    };

    static async getUniqueCollExt(request: Request, response: Response, next: NextFunction) {
        try {
            const id = Number(request.params.id);

            const GetUniqueCollaborator = await ServiceCollaboratorExternal.getUnique(id);
            response.json(GetUniqueCollaborator).status(201);

        } catch (error) {
            next(error);
        }
    };
}
