import { NextFunction, Request, Response } from "express";
import { ServiceCollaborator } from "../services/ServiceCollaborator.js";

export class ControllerCollaboratorInner {
  static async createCollaboratorInner(
    request: Request,

    response: Response,
    next: NextFunction
  ) {
    try {
      const collaborator = await ServiceCollaborator.create(request.body);
      response
        .status(201)
        .json(
          "colaborador cadastrado com sucesso, bem-vindo " + collaborator.name
        );
    } catch (error) {
      next(error);
    }
  }
  static async getAllCollaborators(
    request: Request,

    response: Response,
    next: NextFunction
  ) {
    try {
      const allCollaborators = await ServiceCollaborator.getAll();

      response.status(201).json(allCollaborators);
    } catch (error) {
      next(error);
    }
  }
  static async GetUniqueCollaborator(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const params = request.params;
    console.log(params);
    response.json("tudo bem");
  }
  static async DeleteUniqueCollaborator() {}
}
