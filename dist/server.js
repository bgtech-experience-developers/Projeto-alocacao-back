dotenv.config();
import dotenv from "dotenv";
import express from "express";
import { route } from "./routers/collaboratorInner.js";
const app = express();
const port = process.env.PORTA;
app.use(express.json());
app.use("/colaboradorInterno", route);
app.get("/chegar", (req, res) => {
    res.json("chegou aqui");
});
app.listen(3500, () => {
    console.log("servidor está rodando na porta +", port);
});
//# sourceMappingURL=server.js.map