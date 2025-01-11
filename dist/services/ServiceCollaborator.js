import { CollaboratorInnerRepository } from "../repository/CollaboratorInnerCreate.js";
import CollaboratorExtCreate from "../repository/CollaboratorExtCreate.js";
import { CollaboratorError } from "../error/CollaboratorError.js";
const instanceColaboratorRepository = new CollaboratorInnerRepository();
const instanceColaboratorExtRepository = new CollaboratorExtCreate();
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
export class ServiceCollaboratorExternal {
    static async createColl(body) {
        try {
            // if (!body.colaborador || !body.colaboradorExterno || !body.endereco) {
            //   throw new Error('Dados invalidos no service!')
            // }
            console.log("body recebido:", body);
            const colaboratorRegister = await instanceColaboratorExtRepository.getUniqueExt(undefined, body.colaborador.cpf);
            if (colaboratorRegister === null) {
                return await instanceColaboratorExtRepository.createCollExt(body);
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
            return await instanceColaboratorExtRepository.getAllColl(queryStatus, page, limit);
        }
        catch (error) {
            throw error;
        }
    }
    ;
    static async findAllExternal(status, page, limit) {
        try {
            const queryStatus = typeof status === 'boolean' ? (status ? 1 : 0) : null;
            const colaborator = await instanceColaboratorExtRepository.simpleGetAll(queryStatus, page, limit);
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
            const collaborator = await instanceColaboratorExtRepository.getUniqueExt(id);
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
            const collaborator = await instanceColaboratorExtRepository.getUniqueExt(id);
            if (collaborator) {
                const result = await instanceColaboratorExtRepository.deleteCollaboratorExt(id);
                return result;
            }
            throw new CollaboratorError("Colaborador não cadastrado no sistema!");
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=ServiceCollaborator.js.map