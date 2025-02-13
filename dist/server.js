import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { adminRouter } from "./routers/admin.js";
import SwaggerUiOptions from "swagger-ui-express";
import swaggerDocs from "./docs/swagger.json" assert { type: "json" };
import { schoolRoute } from "./routers/school.js";
import { handleError } from "./middlewares/HandleError.js";
const app = express();
const port = Number(process.env.PORTA);
app.use(express.json());
app.use("/escolas", schoolRoute);
app.use("/api-docs", SwaggerUiOptions.serve, SwaggerUiOptions.setup(swaggerDocs));
app.use("/adms", adminRouter);
app.use(handleError);
app.listen(port, () => {
    console.log("servidor está rodando na porta +", port);
});
