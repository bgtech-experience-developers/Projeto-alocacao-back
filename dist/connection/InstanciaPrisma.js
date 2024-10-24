import { PrismaClient } from "@prisma/client";
export class InstanciaPrismas {
    static instaciaprisma;
    static async createConnection() {
        return this.instaciaprisma
            ? this.instaciaprisma
            : (this.instaciaprisma = new PrismaClient());
    }
}
//# sourceMappingURL=InstanciaPrisma.js.map