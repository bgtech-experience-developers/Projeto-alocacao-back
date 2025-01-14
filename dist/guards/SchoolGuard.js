import Joi from "joi";
export class TypeGuardSchool {
    async typeGuardSchoolCreate(school) {
        const schoolSchema = Joi.object({
            name_school: Joi.string().min(3)
                .max(100)
                .required()
                .messages({
                'string.min': 'Nome de escola inválido',
                'string.max': 'Nome de escola inválido',
                'any.required': 'O nome da escola é obrigatório'
            }),
            cnpj: Joi.string()
                .pattern(/^\d{14}/)
                .required()
                .messages({
                'string.pattern.base': 'CNPJ deve conter exatamente 14 dígitos',
                'any.required': 'CNPJ é obrigatório'
            }),
            manager: Joi.string()
                .required()
                .messages({
                'any.required': 'Nome do gestor é obrigatório'
            }),
            manager_email: Joi.string()
                .email()
                .required()
                .messages({
                'string.email': 'Email inválido',
                'any.required': 'Email é obrigatório'
            }),
            phone: Joi.string()
                .pattern(/^\d{10,11}$/)
                .required()
                .messages({
                'string.pattern.base': "Telefone deve conter 10 ou 11 dígitos numéricos",
                'any.required': 'Telefone é obrigatório'
            }),
            address: Joi.object({
                cep: Joi.string()
                    .pattern(/^\d{5}-?\d{3}$/)
                    .required()
                    .messages({
                    'string.pattern.base': 'CEP com formato inválido',
                    'any.required': 'CEP é obrigatório'
                }),
                street: Joi.string()
                    .required()
                    .messages({
                    'any.required': 'Rua é obrigatório'
                }),
                neighborhood: Joi.string()
                    .required()
                    .messages({
                    'any.required': 'Bairro é obrigatório'
                }),
                state: Joi.string()
                    .required()
                    .messages({
                    'any.required': 'Estado é obrigatório'
                }),
                city: Joi.string()
                    .required()
                    .messages({
                    'any.required': 'Cidade é obrigatório'
                }),
                complement: Joi.string()
            }).required(),
            rooms: Joi.array().items({
                cespe: Joi.string(),
                chair_qtd: Joi.number()
                    .integer()
                    .min(1)
                    .required()
                    .messages({
                    'number.base': 'A quantidade de cadeiras deve ser um número',
                    'number.integer': 'A quantidade de cadeiras deve ser um número inteiro',
                    'number.min': 'Deve haver pelo menos {#limit} cadeiras',
                    'any.required': 'A quantidade de cadeiras é obrigatória'
                }),
                chair_type: Joi.string()
                    .required(),
                floor: Joi.string()
                    .required(),
                identificator: Joi.string()
                    .required()
            }).required()
        });
        return await Promise.all([
            schoolSchema.validate(school)
        ]);
    }
}
//# sourceMappingURL=SchoolGuard.js.map