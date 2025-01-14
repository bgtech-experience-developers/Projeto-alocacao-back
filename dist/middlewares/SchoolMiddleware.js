import { SchoolError } from "../error/SchoolError.js";
import { TypeGuardSchool } from "../guards/SchoolGuard.js";
import { ServiceSchool } from "../services/ServiceSchool.js";
const service = new ServiceSchool();
const { typeGuardSchoolCreate } = new TypeGuardSchool();
export class SchoolMiddleWare {
    async hasSchool(request, response, next) {
        const { id } = request.params;
        const { getUniqueSchoolService } = service;
        if (!id) {
            return response.status(400).json({ message: 'Informe o ID' });
        }
        if (isNaN(Number(id))) {
            return response.status(400).json({ message: 'Informe o ID' });
        }
        try {
            const result = await getUniqueSchoolService(Number(id));
            if (!result) {
                throw new SchoolError('Escola não encontrada');
            }
            next();
        }
        catch (error) {
            if (error instanceof SchoolError) {
                return response.status(error.status).json({ error: error.message });
            }
            return response.status(500).json({ error: 'Internal server error' });
        }
    }
    async validateSchoolMiddleware(request, response, next) {
        const body = request.body;
        try {
            const validate = await typeGuardSchoolCreate(body);
            const error = validate.filter(({ error, warning }) => {
                if (error) {
                    error?.details.map(err => {
                        throw new SchoolError(err?.message);
                    });
                }
            });
            if (error.length != 0) {
                throw new SchoolError('Campos inválidos', 400);
            }
            next();
        }
        catch (error) {
            if (error instanceof SchoolError) {
                return response.status(error.status).json({ error: error.message });
            }
            return response.status(500).json({ error: 'Internal server error' });
        }
    }
}
//# sourceMappingURL=SchoolMiddleware.js.map