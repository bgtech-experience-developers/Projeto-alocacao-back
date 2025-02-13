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
}
