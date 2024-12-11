import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
export class AdminRepository {
    connectionDb = InstanciaPrismas.createConnection();
    async create({ name, password, email }, permisions) {
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
        }
        catch (error) {
            throw error;
        }
    }
    async getUnique(id, email) {
        if (id) {
            return this.connectionDb.admin.findUnique({ where: { id } });
        }
        else {
            return this.connectionDb.admin.findUnique({ where: { email } });
        }
    }
    async getAllAdmins() { }
    async delunique() { }
}
//# sourceMappingURL=AdminRepository.js.map