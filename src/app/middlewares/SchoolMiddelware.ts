import { NextFunction, Request, Response } from "express";
import { schoolSchema } from "../validations/SchoolSchema.js";
import { SchoolSchema } from "../validations/SchoolSchema.js";
import { SafeError } from "../error/CollaboratorError.js";
import { SchemaFilterQuery } from "../validations/schemaQueryFilter.js";
import { BaseMiddleware } from "./BaseMiddleware.js";

export class SchoolMiddleware extends BaseMiddleware {
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
  
}
