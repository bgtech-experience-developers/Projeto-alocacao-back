import { PrismaClient } from "@prisma/client";

class Conexao{
    static prisma
    

     static gerarConexao() {
      

        if(!Conexao.prisma){
            this.prisma = new PrismaClient() 
            console.log(this.prisma)
            
        
        
            console.log(this.prisma)
        }
  
        return this.prisma

    }

}

export default Conexao