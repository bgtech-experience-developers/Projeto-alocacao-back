import { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import { CollaboratorError } from "../error/CollaboratorError.js";
export const handleError = (
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  next: NextFunction // duas camadas
) => {
  if (error instanceof CollaboratorError) {
    response.status(error.status).json({ message: error.message });
    return;
  }
  response.status(500).json("erro interno de servidor");
};
