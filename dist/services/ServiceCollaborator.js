import { CollaboratorInnerRepository } from "../repository/CollaboratorInnerCreate.js";
import { CollaboratorError } from "../error/CollaboratorError.js";
const { del, getAll, create, GetUnique } = new CollaboratorInnerRepository();
export class ServiceCollaborator {
    static async create(body) {
        try {
            if (await getAll(body.cpf)) {
                throw new CollaboratorError("colaborador ja registrado no sistema", 403);
            }
            return await create(body);
        }
        catch (error) {
            throw error;
        }
    }
    static async getAll() {
        try {
            return await getAll();
        }
        catch (error) {
            throw error;
        }
    }
    static async del(id) {
        try {
            const CollboratorDel = await GetUnique(id);
            console.log(CollboratorDel);
            if (!CollboratorDel) {
                throw new CollaboratorError("colaborador não existe", 400);
            }
            return await del(id);
        }
        catch (error) {
            throw error;
        }
    }
    static async getUnique(id) {
        try {
            const collaborator = await GetUnique(id);
            if (!collaborator) {
                throw new CollaboratorError("colaborador não existente", 400);
            }
            return collaborator;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=ServiceCollaborator.js.map