import { ServiceAdmin } from "../services/ServiceAdmin.js";
export class AdminController {
    ServiceAdmin = new ServiceAdmin();
    async login(request, response, next) {
        try {
            const token = this.ServiceAdmin.login(request.body);
            response.status(201).json({ token });
        }
        catch (error) {
            next(error);
        }
    }
    create = () => {
        return async (request, response, next) => {
            try {
                const allpermission = request.body.allpermission;
                console.log("essas são ar permissions em formato de numero ", allpermission);
                const bodyAdmin = request.body;
                const mensagem = await this.ServiceAdmin.create(bodyAdmin, allpermission);
            }
            catch (error) {
                next(error);
            }
        };
    };
    async del() { }
    async update() { }
}
//# sourceMappingURL=AdminCollaborator.js.map