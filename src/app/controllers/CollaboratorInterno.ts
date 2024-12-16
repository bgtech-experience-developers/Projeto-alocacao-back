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
        .json("colaborador cadastrado com sucesso, bem-vindo ");
    } catch (error) {
      next(error);
    }
  }
  static async getAllCollaboratorsInner(
    request: Request,

    response: Response,
    next: NextFunction
  ) {
    try {
      const query = request.query;
      const status = query.status ? Boolean(query.status) : null;
      const page = Number(query.page) ? Number(query.page) * 10 : 10;
      const limit = Number(query.limit) ? Number(query.limit) : 5;

      const allCollaborators = await ServiceCollaborator.getAll(
        status,
        page,
        limit
      );
      response.status(200).json(allCollaborators);
    } catch (error) {
      next(error);
    }
  }
  static async getUniqueCollaboratorInner(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const id = Number(request.params.id);

      const GetUniqueCollaborator = await ServiceCollaborator.getUnique(id);
      response.json(GetUniqueCollaborator).status(201);
    } catch (error) {
      next(error);
    }
  }
  static async deleteCollaboratorInner(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const id = Number(request.params.id);

      const result = await ServiceCollaborator.delete(id);
      response.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}
