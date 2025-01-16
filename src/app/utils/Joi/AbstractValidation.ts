import Joi from "joi";
import { threadId } from "worker_threads";
import { AllError } from "../../error/CollaboratorError.js";

export abstract class  AbstractJoiValidation {
    // A função que retornará objeto válido para o validate
    abstract rules(): object;

    validate(data: object): object {
        const schema = Joi.object(this.rules());
        const {error, value} = schema.validate(data);
        
        if(error) {
            throw new AllError(error.details[0].message);
        }
        console.log("Esquema Validado");
        
        return value;
    }

}