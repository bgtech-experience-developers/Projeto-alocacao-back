import { instanciaPrisma } from "../database/conexao"
class ColaboradorRepository{
    // CRUD

    criar(argumentos) {
        return 'ORM return'
    }

   async buscarTodos() {
      try{
        return await instanciaPrisma.colaborador.findMany()
        }catch(error){
            throw new Error(error) }
    } 

    unico(argumento) {
        return 'ORM return'
    }

    atualizar(argumento){
        return 'ORM return'
    }

    deletar(argumento){
        return 'ORM return'
    }
    
}

export default new ColaboradorRepository()