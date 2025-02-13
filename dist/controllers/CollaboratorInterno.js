import { ServiceCollaborator } from "../services/ServiceCollaborator.js";
export class ControllerCollaboratorInner {
    static async createCollaboratorInner(request, response, next) {
        try {
            const collaborator = await ServiceCollaborator.create(request.body);
            response
                .status(201)
                .json("colaborador cadastrado com sucesso, bem-vindo ");
        }
        catch (error) {
            next(error);
        }
    }
    static async getAllCollaboratorsInner(request, response, next) {
        try {
            const query = request.query;
            const status = query.status ? query.status : null;
            const page = Number(query.page) ? Number(query.page) * 10 : 10;
            const limit = Number(query.limit) ? Number(query.limit) : 5;
            const allCollaborators = await ServiceCollaborator.getAll(status, page, limit);
            console.log(allCollaborators);
            response.status(200).json(allCollaborators);
        }
        catch (error) {
            next(error);
        }
    }
    static async getUniqueCollaboratorInner(request, response, next) {
        try {
            const id = Number(request.params.id);
            const GetUniqueCollaborator = await ServiceCollaborator.getUnique(id);
            response.json(GetUniqueCollaborator).status(201);
        }
        catch (error) {
            next(error);
        }
    }
    static async deleteCollaboratorInner(request, response, next) {
        try {
            const id = Number(request.params.id);
            const result = await ServiceCollaborator.delete(id);
            response.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
