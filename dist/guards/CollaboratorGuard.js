//terá acesso as interfaces globais definidas, ou até mesmo podemos definir as interfaces locais............
import Joi from "joi";
export class TypeGuardCollaboratorInner {
    typeGuardCollaboratorInnerCreate() {
        const CollaboratorInnerSchema = Joi.object({
            pis: Joi.string().required().min(11).max(11).trim(),
            cpf: Joi.string()
                .min(11)
                .max(11)
                .required()
                .custom((value, helpers) => {
                const valueTrim = value.trim();
                //caso value trim seja undefind, quer dizer que ele ta vazio então o ou ali, pegará um valor verdadeiro
                return (valueTrim ||
                    helpers.error("o campo de cpf não pode está vazio, ele é obrigatório"));
            }),
            rg: Joi.string().max(35).required().trim(),
            renova: Joi.number().integer().required(),
            name: Joi.string().max(75).required().trim(),
            address: Joi.string().max(75).required().trim(),
            neighborhood: Joi.string().max(40).required().trim(),
            complement: Joi.string().max(40).optional().trim(),
            cep: Joi.string().min(8).max(8).required().trim(),
            sex: Joi.number().integer().min(1).max(3).required(),
            education: Joi.number().integer().required(),
            phone1: Joi.string().required().required().max(20).required(),
            cell_phone1: Joi.string().required().max(20).required(),
            phone2: Joi.string().required().max(15).required(),
            cell_phone2: Joi.string().required().max(15).required(),
            cod_bank: Joi.number().integer().max(3).required(),
            agency: Joi.string().required().max(20),
            account: Joi.string().required().max(20),
            type_account: Joi.number().integer().optional(),
            variation: Joi.number().integer().optional(),
            email: Joi.string().email().max(50).required(),
            work: Joi.string().max(3).required(),
            type: Joi.string().max(20).required(),
            organ: Joi.number().integer().required(),
            position: Joi.string().required().max(60),
            registration: Joi.string().required().max(20),
            sector: Joi.string().required().max(60),
            experience1: Joi.string().max(150).optional(),
            experience2: Joi.string().max(150).required(),
            experience3: Joi.string().max(150).required(),
            location_proof: Joi.string().max(90).required(),
            password: Joi.string().max(100),
        });
        return CollaboratorInnerSchema;
    }
    typeGuardCollaboratorInnerDelete() {
        const CollaboratorInnerSchema = Joi.object({
            id: Joi.number().positive().required(),
        });
        return CollaboratorInnerSchema;
    }
}
//# sourceMappingURL=CollaboratorGuard.js.map