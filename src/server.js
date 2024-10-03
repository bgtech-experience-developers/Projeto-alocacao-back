import express from 'express'
import cors from 'cors'
dotenv.config()

import dotenv from 'dotenv'
import {rotaUsuario } from './app/routes/user.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/user',rotaUsuario)


const PORTA = process.env.PORTA


app.listen(PORTA, () => {
    console.log('O servidor está rodando! Acesse http://localhost:3000');

})
