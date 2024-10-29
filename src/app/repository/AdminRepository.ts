import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
interface Admin {
  id: number;
  name: string;
  password: string;
  email: string;
  Roles: string;
}
export class AdminRepository {
  private connectionDb = InstanciaPrismas.createConnection();
  async create() {}
  async getUnique(id?: number, email?: string): Promise<Admin | null> {
    if (id) {
      return (await this.connectionDb).admin.findUnique({ where: { id } });
    } else {
      return (await this.connectionDb).admin.findUnique({ where: { email } });
    }
  }
  async getAllAdmins() {}
  async delunique() {}
}
