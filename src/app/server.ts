dotenv.config();
import dotenv from "dotenv";
import express from "express";
import { adminRouter } from "./routers/admin.js";
import { route } from "./routers/collaboratorInner.js";
import { schoolRouter } from "./routers/school.js";

const app = express();
const port = process.env.PORTA;

app.use(express.json());
app.use("/colaborador", route);
app.use("/adms", adminRouter);
app.use("/school", schoolRouter);

app.listen(8000, () => {
  console.log("servidor está rodando na porta +", port);
});
