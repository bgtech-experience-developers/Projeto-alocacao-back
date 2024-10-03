import express from 'express'
export const rotaEndereco = express.Router()
rotaEndereco.patch('/atualizar', ()=> {
    console.log('possivel contorler reponsável para atualizar o endereço')
})