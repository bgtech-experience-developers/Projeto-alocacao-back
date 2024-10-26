import { CollaboratorInnerRepository } from "../repository/CollaboratorInnerCreate.js";
const { del, getAll, create } = new CollaboratorInnerRepository();
export class ServiceCollaborator {
    static async create(body) {
        try {
            return "parabens a rota está funcionanndo conforme o esperado";
            // verifique se tem un registro
        }
        catch (error) {
            throw error;
        }
    }
    static async getAll() { }
}
//# sourceMappingURL=ServiceCollaborator.js.map