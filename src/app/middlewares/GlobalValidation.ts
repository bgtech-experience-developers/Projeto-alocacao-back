import { CollaboratorError } from "../error/CollaboratorError.js";
import { Request, Response, NextFunction } from "express";
import { TypeGuardCollaboratorInner } from "../guards/CollaboratorGuard.js";
import Joi from "joi";
const { typeGuardCollaboratorInnerCreate, typeGuardCollaboratorInnerDelete } =
  new TypeGuardCollaboratorInner();
export class ValidatorCollaboratorInner {
  static CollaboratorInnerCreate(
    req: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { error, value } = typeGuardCollaboratorInnerCreate().validate(
        req.body
      );
      if (error) {
        throw new CollaboratorError("campos invalidos", 400);
      }

      req.body = value;
      next();
    } catch (error) {
      next(error);
    }
  }
  static CollaboratorInnerDelete(
    req: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { error, value } = typeGuardCollaboratorInnerDelete().validate(
        req.params
      );
      if (error) {
        throw new CollaboratorError("dado não suportado para o campo", 400);
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}
