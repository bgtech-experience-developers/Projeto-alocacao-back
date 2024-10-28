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
      console.log(allCollaborators);

      if (allCollaborators instanceof Array) {
        allCollaborators[0] === undefined
          ? response.status(201).json("não existe nenhum registro")
          : response.status(200).json(allCollaborators);
      }
    } catch (error) {
      next(error);
    }
  }
  static async GetUniqueCollaborator(
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
  static async DeleteUniqueCollaborator(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const id = Number(request.params.id);

      const delCollaborator = await ServiceCollaborator.del(id);

      response.status(201).json({ collaboratorDel: delCollaborator.name });
    } catch (error) {
      next(error);
    }
  }
  static LoginAdmCollaborator() {}
}
