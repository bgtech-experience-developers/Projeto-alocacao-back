import { Router } from 'express';
export const schoolRouter = Router();
schoolRouter.get('/', (req, res) => {
    console.log('hello world');
    res.send('ping pong');
});
//# sourceMappingURL=school.js.map