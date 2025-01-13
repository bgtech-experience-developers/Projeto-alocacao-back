import { ServiceCollaboratorExternal } from "../services/ServiceCollaborator.js";
import { Request, Response, NextFunction, response} from "express";

export class ControllerCollaboratorExterno {
    static async createColExt(request: Request, response: Response, next: NextFunction) {
        try {
            console.log(request.body.colaborador)
            const collaborator = await ServiceCollaboratorExternal.createColl(request.body);
            console.log("Corpo chega no controller");
            
            response.status(201).json("Colaborador cadastrado com sucesso! ");
            console.log(collaborator);
            
        } catch (error) {
           next(error); 
        }
    };

    static async getAllCollExt(request: Request, response: Response, next: NextFunction) {
        try {
            const query = request.query;
            const status = query.status ? (query.status as string) : null;           
            const page = Number(query.page) ? Number(query.page)* 10 : 10;
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

    static async getAll(request: Request, response: Response, next: NextFunction) {
        try {
            const {status} = request.body;
            console.log(request.query);
            console.log("oi");
            
            
            const query = request.query;
            const page = query.page ? Number(query.page) : 1;
            const limit = query.limit ? Number(query.limit) : 5;

            const user = await ServiceCollaboratorExternal.findAllExternal(
                status,
                page,
                limit
            );
            response.status(200).json(user);

        } catch (error) {
            next(error)
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

    static async updateColaborator(request: Request, response: Response,next: NextFunction) {
        try {
            response.status(201).json("Hello World")
        } catch(error) {
            next(error)
        }
    }
}
