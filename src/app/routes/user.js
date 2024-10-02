import express from 'express'

export const rotaUsuario= express.Router()

import colaboradorController from '../controller/colaboradorController.js'
const {criar,atualizar,deletar,mostar,usuarioUnico} = colaboradorController
rotaUsuario.get('/pegarTodos',mostar)
rotaUsuario.post('/cadastro',criar)
rotaUsuario.get('/usuárioUnico',usuarioUnico)
rotaUsuario.patch('/atualizarUsuário',atualizar)
rotaUsuario.delete('/deletarUsuario',deletar)



