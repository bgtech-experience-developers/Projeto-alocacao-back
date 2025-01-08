import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
export default class CollaboratorExtCreate {
    connection = InstanciaPrismas.createConnection();
    async createCollExt({ colaborador, colaboradorExterno, endereco }) {
        try {
            if (!colaborador || !colaboradorExterno || !endereco) {
                throw new Error("Dados invalidos no repository!");
            }
            const transaction = this.connection.$transaction(async (tsx) => {
                // Cadastro do colaborador
                const colaboradorEx = await tsx.colaborator.create({ data: { ...colaborador } });
                // Cadastro da tabela pra definir que é externo
                console.log("chegou no external id");
                const externalId = await tsx.colaborator_external.create({ data: { ...colaboradorExterno, idColaborator: colaboradorEx.id } });
                // Cadastro do endereço
                const address = await tsx.address.create({ data: { ...endereco } });
                // Criação dos ids de relacionamento
                await tsx.colaborator_external_address.create({
                    data: { colaborator_externalId: externalId.id, addressId: address.id }
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
    async getAllColl(status, page, limit) {
        try {
            // console.log(page);
            const register = await this.connection.$queryRaw `SELECT c.cell_phone1, c.cell_phone2, c.phone1, c.phone2, c1.type, c.name, c.email FROM colaborator c LEFT JOIN colaborator_external AS c1 ON c.id = c1.idColaborator WHERE c.status = ${typeof status === 'number' ? status : 1}
            OR c.status = ${typeof status === 'number' ? status : 0} LIMIT ${limit} OFFSET ${page}`;
            console.log(register);
            return register;
        }
        catch (error) {
            throw error;
        }
    }
    async simpleGetAll(status, page, limit) {
        try {
            const offset = (page - 1) * limit;
            const externalCollaborator = await this.connection.colaborator.findMany({
                where: {
                    status: status !== null ? status === 1 : undefined,
                    colaborator_external: { some: {} },
                },
                include: {
                    colaborator_external: {
                        include: { colaborator_external_address: {
                                include: { address: true }
                            } }
                    }
                },
                skip: offset,
                take: limit,
            });
            console.log(externalCollaborator);
            return externalCollaborator;
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
                    where: { idColaborator: id },
                    select: { id: true }
                });
                const IdsAddress = await Promise.all(externalId.map(async ({ id }) => {
                    return await tsx.colaborator_external_address.findFirst({
                        where: { colaborator_externalId: id },
                        select: { addressId: true }
                    });
                }));
                IdsAddress.forEach(async (register) => {
                    if (register) {
                        await tsx.address.delete({
                            where: { id: register.addressId }
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