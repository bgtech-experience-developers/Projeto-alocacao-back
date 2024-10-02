import express from 'express'
import cors from 'cors'
import routes from '../src/app/routes/routes.js'
import dotenv from 'dotenv'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', routes)

dotenv.config()
const PORTA = process.env.PORTA


app.listen(PORTA, () => {
    console.log('O servidor está rodando! Acesse http://localhost:3000');

})
