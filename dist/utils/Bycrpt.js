import byript from "bcrypt";
export class HashSenha {
    static async comparePassword(passwordPlana, passwordcrypt) {
        return byript.compareSync(passwordPlana, passwordcrypt);
    }
    static async createPasswordCript(passwordplan, salts = 10) {
        return byript.hashSync(passwordplan, salts);
    }
}
