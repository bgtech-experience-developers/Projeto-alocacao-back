import { Router } from 'express';
export const schoolRouter = Router();
schoolRouter.get('/', (req, res) => {
    res.send('ping pong');
});
//# sourceMappingURL=school.js.map