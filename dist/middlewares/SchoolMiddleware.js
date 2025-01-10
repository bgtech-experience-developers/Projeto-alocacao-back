import { SchoolError } from "../error/SchoolError.js";
import { ServiceSchool } from "../services/ServiceSchool.js";
const service = new ServiceSchool();
export class SchoolMiddleWare {
    async getUniqueSchool(request, response, next) {
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
}
//# sourceMappingURL=SchoolMiddleware.js.map