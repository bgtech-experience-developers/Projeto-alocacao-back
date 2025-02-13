import { NextFunction, Request, Response } from "express";
import { SafeError } from "../error/CollaboratorError";
interface payloadUser {
  id: number;
  roles: string[];
}
export const hasPermission = (role: string) => {
  return (request: Request, response: Response, next: NextFunction) => {
    try {
      const user: payloadUser = request.body.user;
      const isPermission = user.roles.includes(role);
      if (isPermission) {
        next();
        return;
      }
      throw new SafeError("usuário não tem permissão", 403);
    } catch (error) {
      next(error);
    }
  };
};
