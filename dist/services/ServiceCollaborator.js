import { CollaboratorInnerRepository } from "../repository/CollaboratorInnerCreate.js";
import { CollaboratorError } from "../error/CollaboratorError.js";
const instanceColaboratorRepository = new CollaboratorInnerRepository();
export class ServiceCollaborator {
    static async create(body) {
        try {
            const colaboratorRegister = await instanceColaboratorRepository.getUnique(undefined, body.colaborador.cpf);
            if (!colaboratorRegister) {
                return await instanceColaboratorRepository.createCollaborator(body);
            }
            throw new CollaboratorError("colaborador ja cadastrado no sistema");
        }
        catch (error) {
            throw error;
        }
    }
    static async getAll(status, page, limit, queryStatus = 1) {
        try {
            console.log(status);
            if (status) {
                queryStatus = status === "true" ? 1 : 0;
            }
            else {
                queryStatus = null;
            }
            console.log(queryStatus);
            return await instanceColaboratorRepository.getAll(queryStatus, page, limit);
        }
        catch (error) {
            throw error;
        }
    }
    static async getUnique(id) {
        try {
            const collaborator = await instanceColaboratorRepository.getUnique(id);
            if (!collaborator) {
                throw new CollaboratorError("colaborador não encontrado", 400);
            }
            return collaborator;
        }
        catch (error) {
            throw error;
        }
    }
    static async delete(id) {
        try {
            const collaborator = await instanceColaboratorRepository.getUnique(id);
            if (collaborator) {
                const result = await instanceColaboratorRepository.deleteCollaborator(id);
                return result;
            }
            throw new CollaboratorError("colaborador não encontrado no sistema");
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=ServiceCollaborator.js.map