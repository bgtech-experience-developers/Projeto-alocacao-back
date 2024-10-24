import { CollaboratorError } from "../error/CollaboratorError.js";
export const handleError = (error, request, response // duas camadas
) => {
    if (error instanceof CollaboratorError) {
        response.status(error.status).json({ message: error.message });
        return;
    }
    response.status(500).json("erro interno de servidor");
};
//# sourceMappingURL=HandleError.js.map