import { ServiceCollaborator } from "../services/ServiceCollaborator.js";
export class CollaboratorInterno {
    async createCollaboratorInner(request, response, next) {
        try {
            const collaborator = await ServiceCollaborator.create(request.body);
            response.status(201).json(collaborator);
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=CollaboratorInterno.js.map