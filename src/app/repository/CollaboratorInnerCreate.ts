import { boolean } from "joi";
import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
import bycript from "bcrypt";
import { HashSenha } from "../utils/Bycrpt.js";
export class CollaboratorInnerRepository {
  async create(body: CreateCollaboratorInner) {
    try {
      const connectionExist = await InstanciaPrismas.createConnection(); // criando uma conexão com o banco de dados atraves de uma classe
      const passwordHash = await HashSenha.createPasswordCript(
        body.password,
        10
      );
      const collaborator = await connectionExist.collaborator_Inner.create({
        data: { ...body, password: passwordHash },
      });
      console.log(collaborator.password);
      return collaborator as CreateCollaboratorInner;
    } catch (error) {
      throw error;
    }
  }
  async getAll(cpf?: string) {
    try {
      const connectionExist = await InstanciaPrismas.createConnection();
      if (cpf) {
        //somente verificar se existe algum registro de um colaborador
        const UniqueCollaborator =
          await connectionExist.collaborator_Inner.findUnique({
            where: { cpf },
          });
        return UniqueCollaborator;
      }
      return await connectionExist.collaborator_Inner.findMany();
    } catch (error) {
      throw error;
    }
  }
  async GetUnique(id: number) {
    try {
      const connectionExist = await InstanciaPrismas.createConnection();
      const collaborator = await connectionExist.collaborator_Inner.findUnique({
        where: { id },
      });
      return collaborator as CreateCollaboratorInner;
    } catch (error) {
      throw error;
    }
  }
  async del(id: number) {
    try {
      const connectionExist = await InstanciaPrismas.createConnection();
      const CollaboratorDel = await connectionExist.collaborator_Inner.delete({
        where: { id },
      });
      return CollaboratorDel as CreateCollaboratorInner;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update() {
    //futuramente implementado
  }
}
