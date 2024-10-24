import { PrismaClient } from "@prisma/client";
export class InstanciaPrismas {
  private static instaciaprisma: PrismaClient;

  static async createConnection(): Promise<PrismaClient> {
    return this.instaciaprisma
      ? this.instaciaprisma
      : (this.instaciaprisma = new PrismaClient());
  }
}
