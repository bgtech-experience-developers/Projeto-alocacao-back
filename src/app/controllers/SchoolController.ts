import { NextFunction, Response, Request } from "express";
import { schoolSchema } from "../validations/SchoolSchema.js";
import { SchoolService } from "../services/SchoolService.js";

export class SchoolController {
  static schoolService: SchoolService = new SchoolService();
  static async setSchool(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const schoolBody: schoolSchema = request.body;
      const messageResponpse = await this.schoolService.ServiceSetSchool(
        schoolBody
      );
      response.status(201).json(messageResponpse);
    } catch (errr) {
      next(errr);
    }
  }

  static async getAll(request: Request<any, any, any, {limit: string, offset: string}>, response: Response, next: NextFunction) {
    try { 

      return await SchoolService.getAll(request.query.limit, request.query.offset);
    } catch(error) {
      next(error);
    }
  }
}
