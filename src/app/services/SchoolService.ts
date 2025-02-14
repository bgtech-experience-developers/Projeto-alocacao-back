import { SafeError } from "../error/CollaboratorError.js";
import { SchoolRepository } from "../repository/SchoolRepository.js";
import { schoolSchema } from "../validations/SchoolSchema.js";
import { filterQuery } from "../validations/schemaQueryFilter.js";

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
  async getSchoolsSortedByStatusAndAscendingOrder(){
    try{

    }catch(error){
      throw error
    }
  }
  async serviceAdaptiveFilterSchool(query:filterQuery){
    try{
      const 
    }catch(error){
      throw error
    }
  }
}
