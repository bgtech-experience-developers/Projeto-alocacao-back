import { SchoolSchema } from "../validations/SchoolSchema.js";
import { SafeError } from "../error/CollaboratorError.js";
export class SchoolMiddleware {
    static SchoolSchema = new SchoolSchema();
    static async schoolValidator(request, response, next) {
        try {
            const schoolBody = request.body;
            schoolBody.cnpj = schoolBody.cnpj.replace(/\D/gi, "");
            schoolBody.cep = schoolBody.cep.replace(/\D/gi, "");
            schoolBody.answerable_phone = schoolBody.answerable_phone.replace(/\D/gi, "");
            const { error, value } = await this.SchoolSchema.validate(schoolBody);
            console.log(value);
            if (error) {
                throw new SafeError(error.message, 500);
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
