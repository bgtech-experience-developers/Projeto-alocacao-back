import joi from "joi";
import { BaseSchema } from "./AbstractBaseSchema.js";
export class SchoolSchema extends BaseSchema {
    getSchema() {
        const schemaRoom = joi.object({
            floor: joi.string(),
            number_class: joi.string(),
            amount_chair: joi.string().min(1).messages({
                "number.min": "a quantidade de cadeiras deve ser um valor positivo",
            }),
            type_chair: joi.string(),
        });
        return joi.object({
            name_school: joi.string(),
            answerable_email: joi
                .string()
                .trim()
                .email()
                .allow("")
                .messages({ email: "necessário um @ no email" }),
            answerable_phone: joi.string().trim().allow(""),
            cnpj: joi.string().max(14).min(14).trim().required().messages({
                "string.max": "o campo deve conter no maximo 14 digitos",
                "string.min": "o campo cnpj deve conter pelo menos 14 digitos",
            }),
            cep: joi.string().trim().allow(""),
            street: joi.string().trim().allow(""),
            number: joi.string().trim().allow(""),
            city: joi.string().trim().allow(""),
            neighborhood: joi.string().trim().allow(""),
            state: joi.string().trim().allow(""),
            answerable_school: joi.string(),
            room: joi.array().items(schemaRoom).min(1).required().messages({
                "any.required": "a lista de salas é obrigatória",
                "array.base": "a lista de salas deve ser um array",
                "array.min": "a lista de salas deve conter pelo menos uma sala",
            }),
        });
    }
}
