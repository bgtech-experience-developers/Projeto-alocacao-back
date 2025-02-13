import jwt from "jsonwebtoken";
import { SafeError } from "../error/CollaboratorError";
export const authentication = (request, response, next) => {
    try {
        const { authorization } = request.headers;
        const token = authorization && authorization.split(" ")[1];
        if (!token) {
            throw new SafeError("token não fornecido", 403);
        }
        const secret = process.env.ADM_JWT_SECRET;
        if (!secret) {
            throw new SafeError("chave de assinatura não fornecida", 403);
        }
        jwt.verify(token, secret, (err, payload) => {
            if (err) {
                console.log(err);
                throw new SafeError("não autorizado", 403);
            }
            request.body.user = payload;
            console.log(payload);
        });
        next();
    }
    catch (error) {
        next(error);
    }
};
