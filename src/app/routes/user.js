import express from "express";
import loginController from "../controller/loginController.js";
import swaggerUiExpress from "swagger-ui-express";

export const rotaUsuario = express.Router();

import colaboradorController from "../controller/colaboradorController.js";
const { usuarioLogado } = loginController;
const {
  criar,
  atualizar,
  deletar,
  mostar,
  usuarioUnico,
  autenticacao,
  perfil,
} = colaboradorController;
rotaUsuario.get("/pegar-todos", mostar);

rotaUsuario.post("/cadastro", criar);
rotaUsuario.get("/usuarioUnico/:id", usuarioUnico);
rotaUsuario.patch("/atualizarUsuário", atualizar);
rotaUsuario.delete("/deletarUsuario/:cpf", deletar);
rotaUsuario.post("/login", usuarioLogado);
rotaUsuario.get("/perfil", autenticacao, perfil);
