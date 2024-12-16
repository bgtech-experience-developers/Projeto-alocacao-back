import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
export class CollaboratorInnerRepository {
    connection = InstanciaPrismas.createConnection();
    async createCollaborator({ colaboradorInterno, endereco, colaborador, }) {
        try {
            const result = this.connection.$transaction(async (tsx) => {
                const colaborator = await tsx.colaborator.create({
                    data: { ...colaborador },
                });
                const innerId = await tsx.colaborator_inner.create({
                    data: { ...colaboradorInterno, colaboratorId: colaborator.id },
                });
                const address = await tsx.address.create({ data: { ...endereco } });
                await tsx.colaborator_inner_address.create({
                    data: { colaborator_innerId: innerId.id, addressId: address.id },
                });
                return "colaborador registrado com sucesso";
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async getAll(status, page, limit) {
        try {
            const registerColaboraters = await this.connection
                .$queryRaw `SELECT c.cell_phone1,c.cell_phone2,c.phone2,c.phone1,c1.type,c.name,c.email FROM colaborator c LEFT JOIN colaborar.colaborador_interno AS c1 ON c.id = c1.colaboratorId `;
            // const registerColaboraters = await this.connection.colaborator.findMany({
            //   include: { colaborator_inner: { select: { type: true } } },
            // }); caso queira utilizar uma orm para fazer a query siga esse padrão
            return registerColaboraters;
        }
        catch (error) {
            throw error;
        }
    }
    async getUnique(id, cpf) {
        try {
            if (id) {
                const register = await this.connection.colaborator.findUnique({
                    where: { id },
                    include: { colaborator_inner: true },
                });
                return register;
            }
            else {
                const register = await this.connection.colaborator.findFirst({
                    where: { cpf },
                    include: { colaborator_inner: true },
                });
                return register;
            }
        }
        catch (error) {
            throw error;
        }
    }
    async deleteCollaborator(id) {
        try {
            console.log(id);
            const result = this.connection.$transaction(async (tsx) => {
                const idInner = await tsx.colaborator_inner.findMany({
                    where: { colaboratorId: id },
                    select: { id: true },
                });
                console.log(idInner);
                const IdsAddress = await Promise.all(idInner.map(async ({ id }) => {
                    return await tsx.colaborator_inner_address.findFirst({
                        where: { colaborator_innerId: id },
                        select: { addressId: true },
                    });
                }));
                IdsAddress.forEach(async (register) => {
                    if (register) {
                        await tsx.address.delete({ where: { id: register.addressId } });
                    }
                });
                await tsx.colaborator.delete({ where: { id } });
                return "colaborador interno deletado com sucesso";
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async update() {
        //futuramente implementado
    }
}
//# sourceMappingURL=CollaboratorInnerCreate.js.map