import express from 'express'

export const rotaUsuario= express.Router()

import colaboradorController from '../controller/colaboradorController.js'
const {criar,atualizar,deletar,mostar} = colaboradorController
rotaUsuario.post('/cadastro',criar)



