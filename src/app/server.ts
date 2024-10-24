dotenv.config();
import dotenv from "dotenv";
import express from "express";
import { route } from "./routers/collaborator.js";

const app = express();
const port = process.env.PORTA;
console.log(port);
app.use(express.json());
app.use("/colaborador", route);
app.listen(port, () => {
  console.log("servidor está rodando na porta +", port);
});
