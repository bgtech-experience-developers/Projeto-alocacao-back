//terá acesso as interfaces globais definidas, ou até mesmo podemos definir as interfaces locais............
import Joi from "joi";
export class TypeGuardCollaboratorInner {
    async typeGuardCollaboratorInnerCreate({ colaboradorInterno, colaborador, endereco, }) {
        console.log(colaborador);
        const CollaboratorInnerSchema = Joi.object({
            pis: Joi.string().allow("").min(11).max(11).trim(),
            cpf: Joi.string().min(11).max(11).allow(""),
            rg: Joi.string().max(35).allow(""),
            name: Joi.string().max(75).allow("").trim(),
            sex: Joi.number().integer().min(1).max(3).allow(""),
            education: Joi.number().integer().allow(""),
            phone1: Joi.string().allow("").max(20).allow(""),
            cell_phone1: Joi.string().allow("").max(20).allow(""),
            phone2: Joi.string().allow("").max(15).allow(""),
            cell_phone2: Joi.string().allow("").max(15).allow(""),
            cod_bank: Joi.string().max(3).allow(""),
            agency: Joi.string().allow("").max(20),
            account: Joi.string().allow("").max(20),
            type_account: Joi.number().integer().allow(""),
            variation: Joi.number().integer().allow(""),
            email: Joi.string().email().max(50).allow(""),
            experience1: Joi.string().max(150).allow(""),
            experience2: Joi.string().max(150).allow(""),
            experience3: Joi.string().max(150).allow(""),
            type: Joi.string().allow(""),
            location_proof: Joi.string().max(90).allow(""),
        });
        const schemaAdress = Joi.object({
            cep: Joi.string().allow("").max(8).min(8),
            complement: Joi.string().allow(""),
            neighborhood: Joi.string().allow(""),
            street: Joi.string().allow(""),
        });
        const schemaColaboratorInner = Joi.object({
            organ: Joi.number().allow(""),
            position: Joi.string().allow(""),
            registration: Joi.string().allow(""),
            work: Joi.string().allow(""),
            renova: Joi.number().allow(""),
            type: Joi.string().allow(""),
            sector: Joi.string().allow(""),
        });
        return await Promise.all([
            schemaAdress.validate(endereco),
            CollaboratorInnerSchema.validate(colaborador),
            schemaColaboratorInner.validate(colaboradorInterno),
        ]);
    }
    typeGuardCollaboratorInnerDeleteAndGetUnique() {
        const CollaboratorInnerSchema = Joi.object({
            id: Joi.number().positive().required(),
        });
        return CollaboratorInnerSchema;
    }
    typeguardLogin() {
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });
        return loginSchema;
    }
    typeguardCreateAdm() {
        const createAdm = Joi.object({
            email: Joi.string().email().required().messages({
                "string.email": "email está numa formatação incorreta",
            }),
            name: Joi.string(),
            password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
        });
        return createAdm;
    }
}
//# sourceMappingURL=CollaboratorGuard.js.map