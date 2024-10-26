import { CollaboratorInnerRepository } from "../repository/CollaboratorInnerCreate.js";
const { del, getAll, create } = new CollaboratorInnerRepository();
export class ServiceCollaborator {
  static async create(body: CreateCollaborator) {
    try {
      // verifique se tem un registro
    } catch (error) {
      throw error;
    }
  }
  static async getAll() {}
}
