import { ServiceCollaborator } from "../services/ServiceCollaborator.js";
export class CollaboratorInterno {
    async create(request, response, next) {
        try {
            const collaborator = await ServiceCollaborator();
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=CollaboratorInterno.js.map