import { SafeError } from "../error/CollaboratorError.js";
export const handleError = (error, request, response, next // duas camadas
) => {
    if (error instanceof SafeError) {
        error.logError();
        error.sendErrorResponse(response);
        return;
    }
    console.error(error);
    response.status(500).json("erro interno no servidor");
};
