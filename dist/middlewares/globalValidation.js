import { CollaboratorError } from "../error/CollaboratorError.js";
import { checkInterfaceCreate } from "../guards/CollaboratorGuard.js";
export const CollaboratorInner = (request, response, next) => {
    const create = (body) => {
        try {
            if (body && typeof body === "object") {
                const properties = Object.keys(body);
                if (checkInterfaceCreate(body, "createCollaboratorInner")) {
                    request.body = body;
                    next();
                }
                else {
                    throw new CollaboratorError("campos invalidos", 400);
                }
            }
        }
        catch (error) {
            next(error);
        }
    };
};
export class ValidatorCreate {
    static createCollaboratorInner(req, response, next) {
        try {
            console.log("eu chego aqui");
            if (req.body && typeof req.body === "object") {
                if (checkInterfaceCreate(req.body, "createCollaboratorInner")) {
                    next();
                }
                else {
                    throw new CollaboratorError("campos invalidos", 400);
                }
            }
        }
        catch (error) {
            next(error);
        }
    }
}
// const del = (id: unknown) => {};
//# sourceMappingURL=GlobalValidation.js.map