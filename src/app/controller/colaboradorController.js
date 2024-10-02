
import ColaboradorRepository from "../repositore/ColaboradorRepository"
const {deletar,unico,criar,atualizar,buscarTodos} = ColaboradorRepository
const prisma = instanciaPrisma

class ColaboradorController {


    async mostar(req,res) {
        try{
          const users = await buscarTodos()     
          res.json(users)  
        }catch(erro){res.send(erro) }      
    }

    async criar(req,res) {
        
    }

    async atualizar(req,res) {
        return 'Hello'
    }

    async deletar (req, res) {
        return 'Hello'
    }


}


export default  new ColaboradorController()