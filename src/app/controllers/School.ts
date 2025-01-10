import type { NextFunction, Request, Response } from "express";
import { SchoolError } from "../error/SchoolError.js";
import { ServiceSchool } from "../services/ServiceSchool.js";
const service = new ServiceSchool()
export class School {
  async getAllSchool(request: Request, response: Response, next: NextFunction) {
    const {getSchoolService} = service
    try {
      const schools = await getSchoolService()
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
    console.log(id);
    
    try {
      const school = await service.getUniqueSchoolService(Number(id))

      response.status(200).json(school)
    } catch (error) {
      next(error)
    }
  }
}