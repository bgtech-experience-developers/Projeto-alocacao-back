import { SafeError } from "../error/CollaboratorError";
export const hasPermission = (role) => {
    return (request, response, next) => {
        try {
            const user = request.body.user;
            const isPermission = user.roles.includes(role);
            if (isPermission) {
                next();
                return;
            }
            throw new SafeError("usuário não tem permissão", 403);
        }
        catch (error) {
            next(error);
        }
    };
};
