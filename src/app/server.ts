dotenv.config();
import dotenv from "dotenv";
import express from "express";
import { route } from "./routers/collaboratorInner.js";
import { adminRouter } from "./routers/admin.js";
import routeExt from "./routers/collaboratorExternal.js";

const app = express();
const port = process.env.PORTA;

app.use(express.json());
app.use("/colaborador", route);
app.use("/adms", adminRouter);
app.use("/colaboratorExternal", routeExt)

app.listen(8000, () => {
  console.log("servidor está rodando na porta", port);
}); 
