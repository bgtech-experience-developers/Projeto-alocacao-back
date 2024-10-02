
import {instanciaPrisma} from '../database/conexao.js'
import bcrypt from 'bcrypt'

class ColaboradorRepository{
   

   async criar(cpf,senha,email,nome) {
    try{
        const usuario = await instanciaPrisma.colaborador.findUnique({where:{cpf,AND:{email}}})
        console.log('olaa mundo')
          if(!usuario){
            const camadaDeSegurança = 10
            const senhaCodificada = await bcrypt.hash(senha,camadaDeSegurança)
            const usuarioCadastrado = await instanciaPrisma.colaborador.create({data:{cpf,senha:senhaCodificada,email,nome}})
            console.log(usuarioCadastrado)
            return usuarioCadastrado
            
   
          }else{
           throw new Error('usuário ja cadastrado')
          }
       }catch(error){
        throw new Error(error)
    }  
}    

   async buscarTodos() {
      try{
        return await instanciaPrisma.colaborador.findMany()
        }catch(error){
            throw new Error(error) }
    } 

    async unico(cpf) {
    try{
        const userUnico = await instanciaPrisma.colaborador.findUnique({where:{
            cpf
        }})
        if(userUnico){
            return userUnico
        }else{
            throw new Error('não encontrado')
        }
    }catch(error){
        throw new Error(error)


    }
    }

    atualizar(argumento){
        return 'ORM return'
    }

   async deletar(cpf){
    try{

        const user = await instanciaPrisma.colaborador.findUnique({where:{cpf}})
        if(!user){
            throw new Error('não é possivel deletar um usuário inexistente')
            
        }
        await instanciaPrisma.colaborador.delete({where:{cpf}})
      
       const message = {message:'usuário deletado com sucesso'}
       return message
    }catch(error){
        throw new Error(error)

    }
       
    }
    async autenticacao(req,res,next){

    }
    
}

export default new ColaboradorRepository()
