import { PrismaClient } from "@prisma/client";
export class InstanciaPrismas {
    static instaciaprisma;
    static createConnection() {
        return this.instaciaprisma
            ? this.instaciaprisma
            : (this.instaciaprisma = new PrismaClient());
    }
}
