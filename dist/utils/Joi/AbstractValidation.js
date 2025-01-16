import Joi from "joi";
import { AllError } from "../../error/CollaboratorError.js";
export class AbstractJoiValidation {
    validate(data) {
        const schema = Joi.object(this.rules());
        const { error, value } = schema.validate(data);
        if (error) {
            throw new AllError(error.details[0].message);
        }
        console.log("Esquema Validado");
        return value;
    }
}
//# sourceMappingURL=AbstractValidation.js.map