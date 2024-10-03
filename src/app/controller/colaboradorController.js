
import jwt from 'jsonwebtoken'
import ColaboradorRepository from "../repositore/ColaboradorRepository.js"

const { deletar, unico, criar, atualizar, buscarTodos } = ColaboradorRepository



class ColaboradorController {


    async mostar(req, res) {

        try {
            const users = await buscarTodos()
            res.json(users)
        } catch (erro) { res.send(erro) }
    }

    async criar(req, res) {
        try {
            const { cpf, senha, email, nome } = req.body
            const user = await criar(cpf, senha, email, nome)

            res.json('usuário cadastrado com sucesso ' + user.nome)

        } catch (error) {
            res.json('não foi possivel registrar o usuário ' + error.message)

        }

    }
    async usuarioUnico(req, res) {
        try {
            const { cpf } = req.params.id // usa isso ou o query req.query
            const user = await unico(cpf)
            res.status(200).json(user)

        } catch (error) {
            res.status(404).json('não foi possivel encontrar o usuário ' + error.message)
        }
    }

    async atualizar(req, res) {
        return 'Hello'
    }

    async deletar(req, res) {
        try {
            const { cpf } = req.body
            const usuarioDeletado = await deletar(cpf)
            res.json(usuarioDeletado.message)
        } catch (error) {
            res.status(505).send('não foi possível deletar o usuário ' + error.message)
        }

    }

    async autenticacao(req, res, next) {
        try{
            const {token}  = req.headers
            const tokenValido = token && token.split(' ')[1]
            console.log(tokenValido)
            if(tokenValido == null ){
                throw new Error("nao foi possivel validar seu login")
            }
           
            jwt.verify(tokenValido, process.env.SENHAJWT, (err, payload) => {

                if(err){
                    console.log(err)
                    if(err.nome === jwt.TokenExpiredError){
                        res.json('rota ainda nao existe')
                    }
                    throw new Error('nao foi possivel validar o token')
                }
                req.user = payload
                next()
            })

        }catch(error){
            console.error(error)
            res.status(500).send({message : error})
        }
            
    }

    async perfil(req, res){
        const usuario = req.user
        res.json(usuario.nome)
    }


}


export default new ColaboradorController()