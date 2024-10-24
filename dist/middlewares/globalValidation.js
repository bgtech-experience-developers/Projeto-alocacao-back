import { CollaboratorError } from "../error/CollaboratorError.js";
import { checkInterfaceCreate } from "../guards/CollaboratorGuard.js";
export const CollaboratorInner = (request, response, next) => {
    const create = (body) => {
        try {
            if (body && typeof body === "object") {
                const properties = Object.keys(body);
                if (checkInterfaceCreate(body, ...properties)) {
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
    const del = (id) => { };
};
//# sourceMappingURL=GlobalValidation.js.map