import { exist, when } from "joi";
import { CollaboratorInnerRepository } from "../repository/CollaboratorInnerCreate.js";
import CollaboratorExtCreate from "../repository/CollaboratorExtCreate.js";
import { AllError } from "../error/AllError.js";
import { CollaboratorExternalValidation } from "../validations/CollaboratorExternalValidation.js";
import { log } from "console";

const instanceColaboratorRepository = new CollaboratorInnerRepository();
const instanceColaboratorExtRepository = new CollaboratorExtCreate();

export class ServiceCollaborator {
  static async create(body: createColaborator) {
    try {
      const colaboratorRegister = await instanceColaboratorRepository.getUnique(
        undefined,
        body.colaborador.cpf
      );
      if (!colaboratorRegister) {
        return await instanceColaboratorRepository.createCollaborator(body);
      }
      throw new AllError("colaborador ja cadastrado no sistema");
    } catch (error) {
      throw error;
    }
  }

  static async getAll(
    status: string | null,
    page: number,
    limit: number,
    queryStatus: number | null = 1
  ) {
    try {
      console.log(status);
      if (status) {
        queryStatus = status === "true" ? 1 : 0;
      } else {
        queryStatus = null;
      }
      console.log(queryStatus);

      return await instanceColaboratorRepository.getAll(
        queryStatus,
        page,
        limit
      );
    } catch (error) {
      throw error;
    }
  }

  static async getUnique(id: number) {
    try {
      const collaborator = await instanceColaboratorRepository.getUnique(id);
      if (!collaborator) {
        throw new AllError("colaborador não encontrado", 400);
      }
      return collaborator;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: number) {
    try {
      const collaborator = await instanceColaboratorRepository.getUnique(id);
      if (collaborator) {
        const result = await instanceColaboratorRepository.deleteCollaborator(
          id
        );
        return result;
      }
      throw new AllError("colaborador não encontrado no sistema");
    } catch (error) {
      throw error;
    }
  }
}

export class ServiceCollaboratorExternal {
  static async createColl(body: createExternal) {
    try {
      // if (!body.colaborador || !body.colaboradorExterno || !body.endereco) {
      //   throw new Error('Dados invalidos no service!')
      // }
      
      console.log("body recebido:", body.colaborador);
      
      const colaboratorRegister = await instanceColaboratorExtRepository.getUniqueExt(
        undefined,
        body.colaborador.cpf
      );
      
      if (colaboratorRegister === null) {
        return await instanceColaboratorExtRepository.createCollExt(body);
      } else {
        throw new AllError("Colaborador já existe!")
      }

    } catch (error) {
      throw error;
    }
  }

  static async getAllExternal(status: string | null, page: number, limit: number, queryStatus: number | null = 1) {
    try {
      if (status) {
        queryStatus = status === "true" ? 1 : 0;
      } else {
        queryStatus = null;
      }
      return await instanceColaboratorExtRepository.getAllColl(
        queryStatus,
        page,
        limit
      )
    } catch (error) {
      throw error;
    }
  };

  static async findAllExternal(status: boolean | null, page: number, limit: number) {
    try {
      const queryStatus = typeof status === 'boolean' ? (status ? 1 : 0): null;

      const colaborator = await instanceColaboratorExtRepository.simpleGetAll(
        queryStatus,
        page,
        limit
      );
      return colaborator;

    } catch (error) {
      console.error("Erro em getAllSimple", error)
      throw new Error("Colaboradores Externos não encontrados")
    }
  };
  
  static async getUnique(id: number) {
    try {
      const collaborator = await instanceColaboratorExtRepository.getUniqueExt(id);
      if (collaborator === null) {
        throw new AllError("Colaborador não encontrado", 400)
      }
      return collaborator;

    } catch (error) {
      throw error;
    }
  }

  static async deleteColl(id: number) {
    try {
      const collaborator = await instanceColaboratorExtRepository.getUniqueExt(id);
      if (collaborator) {
        const result = await instanceColaboratorExtRepository.deleteCollaboratorExt(id)
        return result;
      }
      throw new AllError("Colaborador não cadastrado no sistema!")

    } catch (error) {
      throw error;
    }
  }

  static async updateColl(id: number, body: updateExternal): Promise<void> {
    try {
      if(!Number(id)) {
        throw new AllError("Parâmetro inválido!", 404);
      }
      const collaboratorValidation = new CollaboratorExternalValidation();
      const schema =  collaboratorValidation.validate(body);;
      const collaborator = await instanceColaboratorExtRepository.getUniqueExt(id);
      
      // Tenho um dilema, se a pessoa quiser não quiser atualizar o cpf?
      if(!collaborator) {
        throw new AllError("Colaborador não cadastrado no sistema!");
      }

      await instanceColaboratorExtRepository.updateCollaboratorExt(body, Number(id))
      
      return 
      

    } catch(error) {
        throw error;
    }
  } 
}


