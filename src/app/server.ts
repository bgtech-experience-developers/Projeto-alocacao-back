dotenv.config();
import dotenv from "dotenv";
import express from "express";
import { route } from "./routers/collaboratorInner.js";

const app = express();
const port = process.env.PORTA;

app.use(express.json());
app.use("/colaborador", route);

app.listen(3500, () => {
  console.log("servidor está rodando na porta +", port);
});
