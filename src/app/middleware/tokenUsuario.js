import jwt from 'jsonwebtoken'
import LoginRepositorio from '../repositore/LoginRepositorio.js'

export const tokenUsuario = async (payload) => {
    console.log(process.env.SENHAJWT)
    const token = jwt.sign(payload, process.env.SENHAJWT, {expiresIn: "1h", algorithm: "HS256"})
    console.log(token)
    return token
}