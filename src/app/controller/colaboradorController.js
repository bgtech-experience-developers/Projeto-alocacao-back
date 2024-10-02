import { instanciaPrisma } from "../database/conexao"
const prisma = instanciaPrisma

class ColaboradorController {


    async mostar(req,res) {
        try{
            const users =  await prisma.colaborador.findMany()
            res.send(users)         
        }catch(erro ){res.send(erro) }
      
       
    }

    async criar(req,res) {
        return 'Hello'
    }

    async atualizar(req,res) {
        return 'Hello'
    }

    async deletar (req, res) {
        return 'Hello'
    }


}


export default  new ColaboradorController()