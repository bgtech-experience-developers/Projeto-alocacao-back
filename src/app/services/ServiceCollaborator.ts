import { CollaboratorInnerRepository } from "../repository/CollaboratorInnerCreate.js";
const { del, getAll, create } = new CollaboratorInnerRepository();
export class ServiceCollaborator {
  static async create(body: CreateCollaborator[]) {
    try {
      const filds = body.filter((props) => {});
    } catch (error) {
      throw error;
    }
  }
  static async getAll() {}
}
