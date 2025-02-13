import { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import { SafeError } from "../error/CollaboratorError.js";

export const handleError = (
  error: SafeError,
  request: Request,
  response: Response,
  next: NextFunction // duas camadas
) => {
  if (error instanceof SafeError) {
    error.logError();
    error.sendErrorResponse(response);
    return;
  }
  console.error(error);
  response.status(500).json("erro interno no servidor");
};
