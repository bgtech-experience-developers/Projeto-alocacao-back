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
            const page = Number(query);
        }
        catch (error) {
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
}
//# sourceMappingURL=CollaboratorExterno.js.map