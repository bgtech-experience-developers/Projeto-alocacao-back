import jwt from "jsonwebtoken";
const SecreteKey = process.env.AssinaturaToken || null;
export class JwtToken {
    static createToken(payload) {
        try {
            if (SecreteKey) {
                const roles = payload.Role?.map((objeto) => objeto.permisson) || [];
                return jwt.sign({ ...payload, roles }, SecreteKey, {
                    expiresIn: "1d",
                    algorithm: "HS256",
                });
            }
            else {
                throw new Error("a chave não está definida para a assinatura do token");
            }
        }
        catch (error) {
            throw error;
        }
    }
    static async verifyToken() { }
}
