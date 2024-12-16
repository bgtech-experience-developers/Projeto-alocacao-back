import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
export default class CollaboratorExtCreate {
    connection = InstanciaPrismas.createConnection();
    async createCollExt({ colaborador, colaboradorExterno, endereco }) {
        try {
            // Inicio do metodo transaction
            const transaction = this.connection.$transaction(async (tsx) => {
                // Cadastro do colaborador
                const colaboradorEx = await tsx.colaborator.create({ data: { ...colaborador } });
                // Cadastro da tabela pra definir que é externo
                const externalId = await tsx.colaborator_external.create({ data: { ...colaboradorExterno, colaboratorId: colaboradorEx.id } });
                // Cadastro do endereço
                const adress = await tsx.address.create({ data: { ...endereco } });
                // Criação dos ids de relacionamento
                await tsx.colaborador_external_adress.create({
                    data: { colaborator_externalId: externalId.id, adressId: adress.id }
                });
                return "Colaborador externo cadastrado com sucesso!";
            });
            return transaction;
        }
        catch (error) {
            console.log("Deu buxo no repository");
            throw error;
        }
    }
    ;
    async getAllExt(status, page, limit) {
        try {
            console.log(page);
            console.log(limit);
            const findColl = await this.connection.$queryRaw `SELECT c.cell_phone1, c.cell_phone2, c.phone1, c.phone2, c1.type, c.name, c.email FROM colaborador c LEFT JOIN colaborador.colaborator_external AS c1 ON c.id = c1.colaboratorId WHERE c.status = ${typeof status === "number" ? status : 1}
                OR c.status = ${typeof status === "number" ? status : 0} LIMIT ${limit} OFFSET ${page}`;
            return findColl;
        }
        catch (error) {
            throw error;
        }
    }
    ;
    async getUniqueExt(id, cpf) {
        try {
            if (id) {
                const doRegister = await this.connection.colaborator.findUnique({
                    where: { id },
                    include: { colaborator_external: true }
                });
                return doRegister;
            }
            else {
                const doRegister = await this.connection.colaborator.findFirst({
                    where: { cpf },
                    include: { colaborator_external: true }
                });
                return doRegister;
            }
        }
        catch (error) {
            throw error;
        }
    }
    ;
    async deleteCollaboratorExt(id) {
        try {
            console.log(id);
            const transaction = this.connection.$transaction(async (tsx) => {
                const externalId = await tsx.colaborator_external.findMany({
                    where: { colaboratorId: id },
                    select: { id: true }
                });
                const IdsAddress = await Promise.all(externalId.map(async ({ id }) => {
                    return await tsx.colaborador_external_adress.findFirst({
                        where: { colaborator_externalId: id },
                        select: { adressId: true }
                    });
                }));
                IdsAddress.forEach(async (register) => {
                    if (register) {
                        await tsx.address.delete({
                            where: { id: register.adressId }
                        });
                    }
                });
                await tsx.colaborator.delete({ where: { id } });
                return "Colaborador Externo deletado!";
            });
            return transaction;
        }
        catch (error) {
            throw error;
        }
    }
    ;
}
//# sourceMappingURL=CollaboratorExtCreate.js.map