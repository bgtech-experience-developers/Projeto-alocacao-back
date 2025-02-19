import { SafeError } from "../error/CollaboratorError.js";
import { SchoolRepository } from "../repository/SchoolRepository.js";
import { schoolSchema } from "../validations/SchoolSchema.js";

export class SchoolService {
  private SchoolRepository: SchoolRepository = new SchoolRepository();
  async ServiceSetSchool(schoolBody: schoolSchema) {
    try {
      const schoolRegister = await this.SchoolRepository.getSchoolByCnpj(
        schoolBody.cnpj
      );
      if (schoolRegister) {
        throw new SafeError("escola ja cadastrada no sistema", 500);
      }
      return await this.SchoolRepository.setSchool(schoolBody);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(limit: number | string, offset: number | string) {
    try {
        limit = Number(limit) || 10;
        offset = Number(limit) || 0;
        await SchoolRepository.getAll(1,2);
    } catch(error) {
      throw error;
    }
  }
}
