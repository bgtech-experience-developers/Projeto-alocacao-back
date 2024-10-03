import { instanciaPrisma } from "../database/conexao.js";
import bcrypt from 'bcrypt'
import { tokenUsuario } from '../middleware/tokenUsuario.js'


class LoginRepositorio {

    async verificarLogin(cpf, senha){
        try{
            const validarCpf = await instanciaPrisma.colaborador.findUnique({
                where: {
                    cpf,
                }
            })
            
            if(validarCpf){
                const validarSenha = await bcrypt.compare(senha, validarCpf.senha)
                // console.log(validarSenha)
                if(validarSenha){
                    // gera token
                    const token = await tokenUsuario(validarCpf)
                    // console.log('chegou token ', token)
                    return token
                }else{
                    throw new Error('senhas nao coincidem')
                }
            }else{
                throw new Error('usuario nao encontrado')
            }

        }catch(error){
            throw new Error(error)
        }
    }
}

export default new LoginRepositorio