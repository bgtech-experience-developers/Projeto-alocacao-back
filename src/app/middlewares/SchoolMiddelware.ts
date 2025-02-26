import { NextFunction, Request, Response } from "express";
import { schoolSchema } from "../validations/SchoolSchema.js";
import { SchoolSchema } from "../validations/SchoolSchema.js";
import { SafeError } from "../error/CollaboratorError.js";
import sanitazeUpdate from "../utils/sanitaze.js";

export class SchoolMiddleware {
  private static SchoolSchema: SchoolSchema = new SchoolSchema();
  static async schoolValidator(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const schoolBody: schoolSchema = request.body;
      schoolBody.cnpj = schoolBody.cnpj.replace(/\D/gi, "");
      schoolBody.cep = schoolBody.cep.replace(/\D/gi, "");
      schoolBody.answerable_phone = schoolBody.answerable_phone.replace(
        /\D/gi,
        ""
      );

      const { error, value } = await this.SchoolSchema.validate(schoolBody);
      console.log(value);
      if (error) {
        throw new SafeError(error.message, 500);
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  static async schoolUpdate(request: Request<any, any, UpdateSchool, any>, response: Response, next: NextFunction) {
    try {
      const schema = request.body;
      
      sanitazeUpdate(schema);
      console.log(schema);
      // console.log('Dados sanitizados');
      
      const {error, value} = await this.SchoolSchema.validateUpdate(schema);
      if(error) {
        throw new SafeError('O esquema está inválido', 400);       
      }
      
      
      next()
    } catch(error) {
      next(error);
    }
  }
}
