import { admin } from "@prisma/client";
import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
export interface Admin {
  name: string;
  password: string;
  email: string;
}
export class AdminRepository {
  private connectionDb = InstanciaPrismas.createConnection();
  
  async create({ name, password, email }: Admin, permisions: number[]) {
    try {
      const result = this.connectionDb.$transaction(async (tsx) => {
        const admin = await tsx.admin.create({
          data: { email, name, password },
        });
        const roles = await tsx.admin_roles.createMany({
          data: permisions.map((rolesID) => {
            return { adminID: admin.id, rolesID };
          }),
        });
        return "adminstrador cadastrado com sucesso";
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  async getUnique(id: undefined, email: string): Promise<admin>;
  async getUnique(
    id?: number,
    email?: string
  ): Promise<Admin[] | Admin | null> {
    if (id) {
      return this.connectionDb.admin.findMany({
        where: { id },
      });
    } else {
      return this.connectionDb.admin.findUnique({ where: { email } });
    }
  }
  async getAllAdmins() {}
  async delunique() {}
}
