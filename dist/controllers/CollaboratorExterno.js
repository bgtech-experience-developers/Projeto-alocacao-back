import { ServiceCollaboratorExternal } from "../services/ServiceCollaborator.js";
export class ControllerCollaboratorExterno {
    static async createColExt(request, response, next) {
        try {
            const collaborator = await ServiceCollaboratorExternal.createColl(request.body);
            console.log(request.body, "Corpo chega no controller");
            response.status(201).json("Colaborador cadastrado com sucesso! ");
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
}
//# sourceMappingURL=CollaboratorExterno.js.map