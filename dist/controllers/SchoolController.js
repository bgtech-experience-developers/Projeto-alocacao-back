import { SchoolService } from "../services/SchoolService.js";
export class SchoolController {
    static schoolService = new SchoolService();
    static async setSchool(request, response, next) {
        try {
            const schoolBody = request.body;
            const messageResponpse = await this.schoolService.ServiceSetSchool(schoolBody);
            response.status(201).json(messageResponpse);
        }
        catch (errr) {
            next(errr);
        }
    }
    static async getAll(request, response, next) {
        try {
            const schoolAll = await SchoolService.getAll(request.query.limit, request.query.offset);
            response.status(200).json(schoolAll);
            return;
        }
        catch (error) {
            next(error);
        }
    }
    static async update(request, response, next) {
        try {
            const result = await SchoolService.update(Number(request.params.id), request.body);
            response.status(200).json(result);
            return;
        }
        catch (error) {
            next(error);
        }
    }
}
