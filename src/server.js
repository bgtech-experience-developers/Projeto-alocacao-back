dotenv.config();
import express from "express";
import cors from "cors";
import swaggerUiExpress from "swagger-ui-express";
import swaggerjson from "../src/config/swagger.json" assert { type: "json" };

import dotenv from "dotenv";
import { rotaUsuario } from "./app/routes/user.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerjson)
);
app.use("/user", rotaUsuario);
app.listen(process.env.PORTA, () => {
  console.log(
    "O servidor está rodando! Acesse http://localhost: " + process.env.PORTA
  );
});
