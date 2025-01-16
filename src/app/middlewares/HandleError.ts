import { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import { AllError } from "../error/CollaboratorError.js";
export const handleError = (
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  next: NextFunction // duas camadas
) => {
  if (error instanceof AllError) {
    response.status(error.status).json({ message: error.message });
    return;
  }

  console.log(error);
  response.status(500).json("erro interno de servidor");
};
