import { SchoolError } from "../error/SchoolError.js";
import type { School } from "../interfaces/school.js";
import { SchoolRepository } from "../repository/SchoolRepository.js"

export class ServiceSchool {
  async getSchoolService() {
    const { getAll } = new SchoolRepository()
    try {
      const schools = await getAll()
      return schools
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  async getUniqueSchoolService(id: number): Promise<School> {
    const {getUnique} = new SchoolRepository()
    
    const school = await getUnique(id)
    
    if(!school) {
      throw new SchoolError('School not found')
    }

    return school
  }

  async createSchool(body: School) {
    const { createSchool } = new SchoolRepository()

    try {
      const create = await createSchool(body)
      return create
    } catch (error) {
      console.log(error);
      throw error
    }
  }
}