import express from 'express'
import colaboradorController from '../controller/colaboradorController.js'

const router = express.Router()


router.get('/get', (req,res) => {
    res.send('Requisição recebida com sucesso!')
})


export default router