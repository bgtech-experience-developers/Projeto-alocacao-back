import CollaboratorExtCreate from "../repository/CollaboratorExtCreate.js";
import { CollaboratorError } from "../error/CollaboratorError.js";
const externalInstance = new CollaboratorExtCreate();
export class ServiceCollaboratorExternal {
    static async createColl(body) {
        try {
            if (!body.colaborador || !body.colaboradorExterno || !body.endereco) {
                throw new Error('Dados invalidos no service!');
            }
            console.log("body recebido:", body);
            const colaboratorRegister = await externalInstance.getUniqueExt(undefined, body.colaborador.cpf);
            if (colaboratorRegister === null) {
                return await externalInstance.createCollExt(body);
            }
            else {
                throw new CollaboratorError("Colaborador já existe!");
            }
        }
        catch (error) {
            throw error;
        }
    }
    static async getAllExternal(status, page, limit, queryStatus = 1) {
        try {
            if (status) {
                queryStatus = status === "true" ? 1 : 0;
            }
            else {
                queryStatus = null;
            }
            return await externalInstance.getAllColl(queryStatus, page, limit);
        }
        catch (error) {
            throw error;
        }
    }
    ;
    static async findAllExternal(status, page, limit) {
        try {
            const queryStatus = typeof status === 'boolean' ? (status ? 1 : 0) : null;
            const colaborator = await externalInstance.simpleGetAll(queryStatus, page, limit);
            return colaborator;
        }
        catch (error) {
            console.error("Erro em getAllSimple", error);
            throw new Error("Colaboradores Externos não encontrados");
        }
    }
    ;
    static async getUnique(id) {
        try {
            const collaborator = await externalInstance.getUniqueExt(id);
            if (collaborator === null) {
                throw new CollaboratorError("Colaborador não encontrado", 400);
            }
            return collaborator;
        }
        catch (error) {
            throw error;
        }
    }
    static async deleteColl(id) {
        try {
            const collaborator = await externalInstance.getUniqueExt(id);
            if (collaborator) {
                const result = await externalInstance.deleteCollaboratorExt(id);
                return result;
            }
            throw new CollaboratorError("Colaborador não cadastrado no sistema!");
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=ServiceExt.js.map