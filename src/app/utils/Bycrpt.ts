import byript from "bcrypt";
export class HashSenha {
  static async comparePassword(
    passwordPlana: string,
    passwordcrypt: string
  ): Promise<boolean> {
    return byript.compareSync(passwordPlana, passwordcrypt);
  }
  static async createPasswordCript(
    passwordplan: string,
    salts: number = 10
  ): Promise<string> {
    return byript.hashSync(passwordplan, salts);
  }
}
