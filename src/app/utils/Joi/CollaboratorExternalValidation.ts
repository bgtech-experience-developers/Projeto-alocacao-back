import Joi, {ObjectSchema} from "joi";
import { AbstractJoiValidation } from "./AbstractValidation.js";

export class CollaboratorExternalValidation extends AbstractJoiValidation {
    rules() {
        // Falta fazer os outros metodos como o de collaboratorSchema
        // Outra funcionalidade que tenho que fazer é sanitização dos campos
        return {
            colaborador: CollaboratorExternalValidation.collaboratorSchema(),
            // colaboradorExterno: Joi.object<ColaboratorExt>({
            //     work: Joi.string().optional().allow(""),
            //     type: Joi.string().optional().allow(""),
            //     organ: Joi.number().optional().allow(""),
            //     renova: Joi.number().optional().allow(""),
            //     registration: Joi.string().optional().allow(""),
            //     sector: Joi.string().optional().allow(""),
            //     position: Joi.string().optional().allow(""),
            // }),
            // endereco: Joi.object<address>({
            //     complement: Joi.string().optional().allow(""),
            //     street: Joi.string().optional().allow(""),
            //     cep: Joi.string().optional().allow(""),
            //     neighborhood: Joi.string().optional().allow(""),
            // }),
            colaboradorExterno: CollaboratorExternalValidation.collaboratorExtSchema(),
            endereco: CollaboratorExternalValidation.collaboratorAddress(),
        };
    }

    static collaboratorSchema(): ObjectSchema {
        return Joi.object<updateExternal, true, object>({
            cpf: Joi.string().min(11).max(11).required().messages({
                "string.min": "O campo cpf deve conter no mínimo 11 dígitos",
                "string.max": "O campo cpf deve conter no máximo 11 dígitos",
            }),
            pis: Joi.string().optional().allow(""),
            rg: Joi.string().optional().allow(""),
            status: Joi.boolean().optional(),
            name: Joi.string().optional().allow(""),
            sex: Joi.number().optional().allow(""),
            education: Joi.number().optional().allow(""),
            phone1: Joi.string()    .optional().allow(""),
            cell_phone1: Joi.string().optional().allow(""),
            phone2: Joi.string().optional().allow(""),
            cell_phone2: Joi.string().optional().allow(""),
            cod_bank: Joi.string().optional().allow(""),
            agency: Joi.string().optional().allow(""),
            account: Joi.string().optional().allow(""),
            type_account: Joi.number().optional().allow(""),
            variation: Joi.number().optional().allow(""),
            email: Joi.string().optional().allow(""),
            experience1: Joi.string().optional().allow(""),
            experience2: Joi.string().optional().allow(""),
            experience3: Joi.string().optional().allow(""),
            location_proof: Joi.string().optional().allow(""),
            type: Joi.string().optional().allow(""),
        });
    }

    static collaboratorExtSchema(): ObjectSchema {
        return Joi.object<updateExternal, true, object>({
            work: Joi.string().optional().allow(""),
                type: Joi.string().optional().allow(""),
                organ: Joi.number().optional().allow(""),
                renova: Joi.number().optional().allow(""),
                registration: Joi.string().optional().allow(""),
                sector: Joi.string().optional().allow(""),
                position: Joi.string().optional().allow(""),
        })
    }

    static collaboratorAddress(): ObjectSchema {
        return Joi.object<address, true, object>({
            complement: Joi.string().optional().allow(""),
            street: Joi.string().optional().allow(""),
            cep: Joi.string().optional().allow(""),
            neighborhood: Joi.string().optional().allow(""),
        })
    }

}
