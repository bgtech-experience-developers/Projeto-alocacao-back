import { NextFunction, Request, Response } from "express";
import { ServiceAdmin } from "../services/ServiceAdmin.js";
import { Collaborator } from "../middlewares/CollaboratorValidator.js";
import { AllError } from "../error/CollaboratorError.js";
import { Admin } from "../repository/AdminRepository.js";
interface Permissions {
  criar: string;
  deletar: string;
  atualizar: string;
  ler: string;
}
export class AdminController {
  private ServiceAdmin: ServiceAdmin = new ServiceAdmin();

  async login(request: Request, response: Response, next: NextFunction) {
    try {
      const token = this.ServiceAdmin.login(request.body);

      response.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
  create = () => {
    return async (request: Request, response: Response, next: NextFunction) => {
      try {
        const allpermission = request.body.allpermission as number[];
        console.log(
          "essas são ar permissions em formato de numero ",
          allpermission
        );
        const bodyAdmin: Admin = request.body;
        const mensagem = await this.ServiceAdmin.create(
          bodyAdmin,
          allpermission
        );
        response.status(201).json(mensagem)
      } catch (error) {
        next(error);
      }
    };
  };

  async del() {}
  async update() {}
}
