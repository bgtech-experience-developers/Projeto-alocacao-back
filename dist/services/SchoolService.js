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
    static async getAll(limit, offset) {
        try {
            limit = Number(limit) || 2;
            offset = Number(limit) || 0;
            const schoolAll = await SchoolRepository.getAll(limit, offset);
            const newArray = schoolAll.map((school) => ({
                id: school.id,
                cnpj: school.cnpj,
                answerable_school: school.answerable_school,
                class_room: school.class_room[0],
                school_address: school.school_address[0].address
            }));
            return newArray;
        }
        catch (error) {
            throw error;
        }
    }
    static async update(id, school) {
        try {
            const schoolIsExist = await SchoolRepository.getByID(id);
            if (!schoolIsExist)
                throw new SafeError("Escola não cadastrada no sistema!", 404);
            await SchoolRepository.update(id, school);
        }
        catch (error) {
            throw error;
        }
    }
}
