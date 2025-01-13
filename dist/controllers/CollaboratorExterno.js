import { ServiceCollaboratorExternal } from "../services/ServiceCollaborator.js";
export class ControllerCollaboratorExterno {
    static async createColExt(request, response, next) {
        try {
            console.log(request.body.colaborador);
            const collaborator = await ServiceCollaboratorExternal.createColl(request.body);
            console.log("Corpo chega no controller");
            response.status(201).json("Colaborador cadastrado com sucesso! ");
            console.log(collaborator);
        }
        catch (error) {
            next(error);
        }
    }
    ;
    static async getAllCollExt(request, response, next) {
        try {
            const query = request.query;
            const status = query.status ? query.status : null;
            const page = Number(query.page) ? Number(query.page) * 10 : 10;
            const limit = Number(query.limit) ? Number(query.limit) : 5;
            const allCollaborators = await ServiceCollaboratorExternal.getAllExternal(status, page, limit);
            response.status(200).json(allCollaborators);
        }
        catch (error) {
            next(error);
        }
    }
    ;
    static async getAll(request, response, next) {
        try {
            const { status } = request.body;
            console.log(request.query);
            console.log("oi");
            const query = request.query;
            const page = query.page ? Number(query.page) : 1;
            const limit = query.limit ? Number(query.limit) : 5;
            const user = await ServiceCollaboratorExternal.findAllExternal(status, page, limit);
            response.status(200).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    ;
    static async getUniqueCollExt(request, response, next) {
        try {
            const id = Number(request.params.id);
            const GetUniqueCollaborator = await ServiceCollaboratorExternal.getUnique(id);
            response.json(GetUniqueCollaborator).status(201);
        }
        catch (error) {
            next(error);
        }
    }
    ;
    static async deleteColaborator(request, response, next) {
        try {
            const id = Number(request.params.id);
            const result = await ServiceCollaboratorExternal.deleteColl(id);
            response.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
    static async updateColaborator(request, response, next) {
        try {
            response.status(201).json("Hello World");
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=CollaboratorExterno.js.map