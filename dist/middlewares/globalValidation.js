import { CollaboratorError } from "../error/CollaboratorError.js";
import { TypeGuardCollaboratorInner } from "../guards/CollaboratorGuard.js";
const { typeGuardCollaboratorInnerCreate, typeGuardCollaboratorInnerDeleteAndGetUnique, typeguardLogin, typeguardCreateAdm, } = new TypeGuardCollaboratorInner();
export class ValidatorCollaboratorInner {
    static async CollaboratorInnerCreate(req, response, next) {
        try {
            const all = await typeGuardCollaboratorInnerCreate(req.body);
            const error = all.filter(({ error, warning }) => {
                return error ? error.message : null;
            });
            console.log(error);
            if (error.length != 0) {
                throw new CollaboratorError("campos invalidos", 400);
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
    static CollaboratorInnerDeleteAndGetUnique(req, response, next) {
        try {
            const { error, value } = typeGuardCollaboratorInnerDeleteAndGetUnique().validate({
                id: Number(req.params.id),
            });
            if (error) {
                throw new CollaboratorError("dado não suportado para o campo", 400);
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
    static loginValidation(req, response, next) {
        try {
            const { value, error } = typeguardLogin().validate(req.body);
            if (error) {
                throw new CollaboratorError("email e senha são necessários", 400);
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
    static createAdm(req, response, next) {
        try {
            const { error, value } = typeguardCreateAdm().validate(req.body);
            if (error) {
                console.log(error.message);
                throw new CollaboratorError(error.message);
            }
            const permissions = req.query.permissions;
            const permissionsAdms = [
                "1",
                "2",
                "3",
                "4",
            ];
            if (permissions) {
                const query$string = permissions.split(",");
                if (query$string.length != 0) {
                    console.log(query$string);
                    const allpermission = query$string.filter((perminssion, index) => {
                        if (typeof perminssion === "string") {
                            return permissionsAdms.includes(perminssion);
                        }
                    });
                    if (allpermission.length === 0) {
                        throw new CollaboratorError("adicione pelo menos uma permissão para este administrador");
                    }
                    req.body.allpermission = allpermission.map((permission) => {
                        return Number(permission);
                    });
                    next();
                    return;
                }
                throw new CollaboratorError("envie uma permissão entre 1 e 4");
            }
            else {
                throw new CollaboratorError("envie a propriedade permission para poder adicionar uma permissão ao administrador");
            }
        }
        catch (error) {
            next(error);
        }
    }
}
//# sourceMappingURL=GlobalValidation.js.map