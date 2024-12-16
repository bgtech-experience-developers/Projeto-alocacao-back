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
            const page = Number(query.page) ? Number(query.page) * 10 : 10;
            const limit = Number(query.limit) ? Number(query.limit) : 5;
            const allCollaborators = await ServiceCollaboratorExternal.getAllExternal(
                status,
                page,
                limit
            );
            response.status(200).json(allCollaborators);

        } catch (error) {
            next(error);
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

    static async deleteColaborator(request: Request, response: Response, next: NextFunction) {
        try {
            const id = Number(request.params.id);

            const result = await ServiceCollaboratorExternal.deleteColl(id);
            response.status(201).json(result);

        } catch (error) {
            next(error);
        }
    }
}
