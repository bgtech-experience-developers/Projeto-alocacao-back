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
        if (checkInterfaceCreate<CreateCollaborator>(body, ...properties)) {
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
  const del = (id: unknown) => {};
};
