import { SchoolError } from "../error/SchoolError.js";
import { SchoolRepository } from "../repository/SchoolRepository.js";
export class ServiceSchool {
    async getSchoolService(limit, page) {
        const { getAll } = new SchoolRepository();
        try {
            const schools = await getAll(limit, page);
            return schools;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getUniqueSchoolService(id) {
        const { getUnique } = new SchoolRepository();
        const school = await getUnique(id);
        if (!school) {
            throw new SchoolError('School not found');
        }
        return school;
    }
    async createSchool(body) {
        const { createSchool } = new SchoolRepository();
        try {
            const create = await createSchool(body);
            return create;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteSchoolService(id) {
        const { deleteSchool } = new SchoolRepository();
        try {
            const deleted = await deleteSchool(id);
            return deleted;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}
//# sourceMappingURL=ServiceSchool.js.map