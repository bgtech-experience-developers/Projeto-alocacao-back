import { NextFunction, Request, Response } from "express";
import { ServiceCollaborator } from "../services/ServiceCollaborator.js";

export class CollaboratorInterno {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const collaborator = await ServiceCollaborator.create(request.body);
      response.status(201).json(collaborator);
    } catch (error) {
      next(error);
    }
  }
}
