import jwt from "jsonwebtoken";
const SecreteKey = process.env.AssinaturaToken || null;
export interface roles {
  name: String;
  permisson: String;
}
interface payload {
  id: number;
  email: string;
  password: string;
  Role: roles[];
}
export class JwtToken {
  static createToken(payload: Partial<payload>): string {
    try {
      if (SecreteKey) {
        const roles = payload.Role?.map((objeto) => objeto.permisson) || [];
        return jwt.sign({ ...payload, roles }, SecreteKey, {
          expiresIn: "1d",
          algorithm: "HS256",
        });
      } else {
        throw new Error("a chave não está definida para a assinatura do token");
      }
    } catch (error) {
      throw error;
    }
  }
  static async verifyToken() {}
}
