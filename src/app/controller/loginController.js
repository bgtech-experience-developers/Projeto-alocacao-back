import LoginRepositorio from "../repositore/LoginRepositorio.js"

const {verificarLogin} = LoginRepositorio

class loginController{

    async usuarioLogado(req, res){
        try{
            const {cpf, senha} = req.body
            const logado = await verificarLogin(cpf, senha)
            res.status(200).json(logado)
            // res.json(logado)
        }catch(error){
            res.json("voce não possui login" + error.message)
        }
    }

    async perfilUsuario(){
        //lerolero
    }

}

export default new loginController