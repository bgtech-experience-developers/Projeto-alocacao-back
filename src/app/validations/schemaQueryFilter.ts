import { Schema } from "joi";
import { BaseSchema } from "./AbstractBaseSchema";
import joi from 'joi'
export interface filterQuery{
    order:'asc' | 'desc',
    status: 'true' | 'false'
    value: string
}
export class SchemaFilterQuery extends BaseSchema{
    getSchema(): Schema {
        return joi.object<filterQuery,true,filterQuery>({
            order: joi.string().valid('asc','desc').required().messages({
                'any.required' : 'o campo order deve ser passado na query string'
            }),
            status: joi.string().valid('true','false').required().messages({
                'any.required' : "o campo status deve ser passado na query string"
            }),
            value: joi.string().required().messages({
                'any.required' : "o campo value deve ser passado na query string"
            })
        })
    }
}