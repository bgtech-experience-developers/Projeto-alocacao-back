import express from 'express'
import loginController from '../controller/loginController.js'


export const rotaUsuario= express.Router()

import colaboradorController from '../controller/colaboradorController.js'
const { usuarioLogado } =  loginController
const {criar,atualizar,deletar,mostar,usuarioUnico, autenticacao, perfil} = colaboradorController
rotaUsuario.get('/pegar-todos',mostar)
rotaUsuario.post('/cadastro',criar)
rotaUsuario.get('/usuário-unico',usuarioUnico)
rotaUsuario.patch('/atualizar-usuário',atualizar)
rotaUsuario.delete('/deletar-usuario',deletar)
rotaUsuario.post('/login', usuarioLogado)
rotaUsuario.get('/perfil', autenticacao, perfil)


