import { NextFunction, Response, Request } from "express";
import { schoolSchema } from "../validations/SchoolSchema.js";
import { SchoolService } from "../services/SchoolService.js";
import { filterQuery } from "../validations/schemaQueryFilter.js";

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
  static async AdaptiveFilterSchool( request: Request<any,any,any,filterQuery>,
    response: Response,
    next: NextFunction){
      const query = request.query
      const recordList = ''
      response.status(200).json(recordList)
      return;


    }
}
