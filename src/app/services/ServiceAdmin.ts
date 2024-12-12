
import { CollaboratorError } from "../error/CollaboratorError.js";
import { Admin, AdminRepository } from "../repository/AdminRepository.js";
import { HashSenha } from "../utils/Bycrpt.js";
import { JwtToken } from "../utils/Jwt.js";
import { roles } from "../utils/Jwt.js";

export class ServiceAdmin {
  private AdminRepository = new AdminRepository();
  async login({ email, password }: login): Promise<string> {
    const admin = await this.AdminRepository.getUnique(undefined, email);
    try {
      if (!admin) {
        // verifica se esse admin existe
        throw new CollaboratorError("admin inexistente", 400);
      }
      const comparePassword = await HashSenha.comparePassword(
        password,
        admin.password
      );
      if (!comparePassword) {
        // verificar se a senha criptografada é a mesma criptografia da senha plana enviada
        throw new CollaboratorError("senhas não coincidem");
      }
      const Role: roles[] = [
        { name: "admin", permisson: "delete" },
        { name: "admin", permisson: "create" },
      ]; //simulação dos papeis dos administradores em memória
      return JwtToken.createToken({ ...admin, Role });
    } catch (error) {
      throw error;
    }
  }
  async create(body: Admin, perminssions: number[]) {
    try {
      const adminRegister = await this.AdminRepository.getUnique(
        undefined,
        body.email
      );
      if (adminRegister) {
        throw new CollaboratorError("adminstrador ja registrado no sistema");
      }
      body.password = await HashSenha.createPasswordCript(body.password, 10);

      return this.AdminRepository.create(body, perminssions);
    } catch (error) {
      throw error;
    }
  }
}