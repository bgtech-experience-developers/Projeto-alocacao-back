import { AllError } from "../error/CollaboratorError.js";
export const handleError = (error, request, response, next // duas camadas
) => {
    if (error instanceof AllError) {
        response.status(error.status).json({ message: error.message });
        return;
    }
    console.log(error);
    response.status(500).json("erro interno de servidor");
};
//# sourceMappingURL=HandleError.js.map