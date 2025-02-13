import { SafeError } from "../error/CollaboratorError.js";
import { SchoolRepository } from "../repository/SchoolRepository.js";
export class SchoolService {
    SchoolRepository = new SchoolRepository();
    async ServiceSetSchool(schoolBody) {
        try {
            const schoolRegister = await this.SchoolRepository.getSchoolByCnpj(schoolBody.cnpj);
            if (schoolRegister) {
                throw new SafeError("escola ja cadastrada no sistema", 500);
            }
            return await this.SchoolRepository.setSchool(schoolBody);
        }
        catch (error) {
            throw error;
        }
    }
}
