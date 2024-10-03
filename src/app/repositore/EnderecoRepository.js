import { instanciaPrisma } from "../database/conexao";
export class EnderecoRepository{
    async criar(endereco,bairro,estado,cidade,complemento,userId,cep){
        try{
            const temEndereço = await instanciaPrisma.endereco.findUnique({where:{userId,AND:{cep}}})
            if(!temEndereço){
               const novoEndereco =  await instanciaPrisma.endereco.create({data:{endereco,bairro,estado,cidade,complemento,userId,cep}})
            return novoEndereco
            }
            throw new Error('endereço ja existente')
        }catch(error){
            throw new Error(error)
        }
    }
}