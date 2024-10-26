import { CollaboratorError } from "../error/CollaboratorError.js";
export const handleError = (error, request, response, next // duas camadas
) => {
    console.log("eu chego aquiiiii");
    if (error instanceof CollaboratorError) {
        response.status(error.status).json({ message: error.message });
        return;
    }
    response.status(500).json("erro interno de servidor");
};
//# sourceMappingURL=HandleError.js.map