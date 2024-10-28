import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
import bycript from "bcrypt";
export class CollaboratorInnerRepository {
    async create(body) {
        try {
            const connectionExist = await InstanciaPrismas.createConnection(); // criando uma conexão com o banco de dados atraves de uma classe
            const passwordHash = bycript.hashSync(body.password, 10);
            const collaborator = await connectionExist.collaborator_Inner.create({
                data: { ...body, password: passwordHash },
            });
            console.log(collaborator.password);
            return collaborator;
        }
        catch (error) {
            throw error;
        }
    }
    async getAll(cpf) {
        try {
            const connectionExist = await InstanciaPrismas.createConnection();
            if (cpf) {
                //somente verificar se existe algum registro de um colaborador
                const UniqueCollaborator = await connectionExist.collaborator_Inner.findUnique({
                    where: { cpf },
                });
                return UniqueCollaborator;
            }
            return await connectionExist.collaborator_Inner.findMany();
        }
        catch (error) {
            throw error;
        }
    }
    async GetUnique(id) {
        try {
            const connectionExist = await InstanciaPrismas.createConnection();
            const collaborator = await connectionExist.collaborator_Inner.findUnique({
                where: { id },
            });
            return collaborator;
        }
        catch (error) {
            throw error;
        }
    }
    async del(id) {
        try {
            const connectionExist = await InstanciaPrismas.createConnection();
            const CollaboratorDel = await connectionExist.collaborator_Inner.delete({
                where: { id },
            });
            return CollaboratorDel;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async update() {
        //futuramente implementado
    }
}
//# sourceMappingURL=CollaboratorInnerCreate.js.map