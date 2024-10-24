import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
export class CollaboratorInnerRepository {
  async create(body: CreateCollaborator) {
    try {
      const connectionExist = await InstanciaPrismas.createConnection();
      const collaborator = await connectionExist.collaborator_Inner.create({
        data: { ...body },
      });
      return collaborator;
    } catch (error) {
      throw error;
    }
  }
  async getAll() {}
  async del() {}
  async update() {
    //futuramente implementado
  }
}
