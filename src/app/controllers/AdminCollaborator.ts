import { NextFunction, Request, Response } from "express";
import { ServiceAdmin } from "../services/ServiceAdmin.js";
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
  async create() {}

  async del() {}
  async update() {}
}
