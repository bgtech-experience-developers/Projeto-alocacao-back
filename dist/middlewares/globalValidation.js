import { CollaboratorError } from "../error/CollaboratorError.js";
import { TypeGuardCollaboratorInner } from "../guards/CollaboratorGuard.js";
const { typeGuardCollaboratorInnerCreate, typeGuardCollaboratorInnerDelete } = new TypeGuardCollaboratorInner();
export class ValidatorCollaboratorInner {
    static CollaboratorInnerCreate(req, response, next) {
        try {
            const { error, value } = typeGuardCollaboratorInnerCreate().validate(req.body);
            if (error) {
                throw new CollaboratorError("campos invalidos", 400);
            }
            req.body = value;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    static CollaboratorInnerDelete(req, response, next) {
        try {
            const { error, value } = typeGuardCollaboratorInnerDelete().validate(req.params);
            if (error) {
                throw new CollaboratorError("dado não suportado para o campo", 400);
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=GlobalValidation.js.map