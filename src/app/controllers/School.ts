import type { NextFunction, Request, Response } from "express";
import { SchoolError } from "../error/SchoolError.js";
import { ServiceSchool } from "../services/ServiceSchool.js";
const service = new ServiceSchool()
export class School {
  async getAllSchool(request: Request, response: Response, next: NextFunction) {
    const {getSchoolService} = service
    try {
      const query = request.query
      const queryPage = Number(query.page) || 1
      const limit = Number(query.limit) | 5 
      const page = (queryPage - 1) * limit
      
      const schools = await getSchoolService(limit, page)
      response.status(200).json(schools)
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async createSchool(request: Request, response: Response, next: NextFunction) {
    const {body} = request
    const {createSchool} = service
    try {
      await createSchool(body)
      response.status(200).send('Escola criada com sucesso')
    } catch (error) {
      console.log(error);
      next()
    }
  }

  async getUniqueSchool(request: Request, response: Response, next: NextFunction): Promise<void> {
    const { id } = request.params
    
    try {
      const school = await service.getUniqueSchoolService(Number(id))

      response.status(200).json(school)
    } catch (error) {
      next(error)
    }
  }

  async deleteSchool(request: Request, response: Response, next: NextFunction): Promise<void> {
    const {id} = request.params

    try {
      const deleted = await service.deleteSchoolService(Number(id))
      response.status(200).json({message: 'Deletado com sucesso', schoolDeleted: deleted.name_school})
    } catch (error) {
      next(error)
    }
  }
}