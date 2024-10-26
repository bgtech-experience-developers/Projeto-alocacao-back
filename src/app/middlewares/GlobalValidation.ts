import { CollaboratorError } from "../error/CollaboratorError.js";
import { Request, Response, NextFunction } from "express";
import { checkInterfaceCreate } from "../guards/CollaboratorGuard.js";

export const CollaboratorInner = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const create = (body: unknown) => {
    try {
      if (body && typeof body === "object") {
        const properties = Object.keys(body);
        if (
          checkInterfaceCreate<CreateCollaborator>(
            body,
            "createCollaboratorInner"
          )
        ) {
          request.body = body;
          next();
        } else {
          throw new CollaboratorError("campos invalidos", 400);
        }
      }
    } catch (error) {
      next(error);
    }
  };
};
export class ValidatorCreate {
  static createCollaboratorInner(
    req: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      if (req.body && typeof req.body === "object") {
        if (
          checkInterfaceCreate<CreateCollaborator>(
            req.body,
            "createCollaboratorInner"
          )
        ) {
          next();
        } else {
          throw new CollaboratorError("campos invalidos", 400);
        }
      }
    } catch (error) {
      next(error);
    }
  }
  //   static createCollaboratorExterno(
  //     req: Request,
  //     resposne: Response,
  //     next: NextFunction
  //   ) {
  //     try {
  //       const body = req.body;
  //       if (body && typeof body === "object") {
  //         if (
  //           checkInterfaceCreate<CreateCollaborator>(
  //             body,
  //             "createCollaboratorInner"
  //           )
  //         ) {
  //           req.body = body;
  //           next();
  //         } else {
  //           throw new CollaboratorError("campos invalidos", 400);
  //         }
  //       }
  //     } catch (error) {
  //       next(error);
  //     }
  //   }
}
// const del = (id: unknown) => {};
