import userService from "../services/userService.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import dotenv from "dotenv"
dotenv.config();
const JWTSecret = process.env.JWTSECRET

const createUser = async(req,res) => {
    try {
        const {name, email, password} = req.body
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        await userService.Create(name, email, hash)
        res.status(201).json({ message: "Usuário cadastrado com sucesso"})
    } catch(error){
        console.log(error)
        res.status(500).json({error: "Não foi possivel cadastrar o usuário. Erro interno do servidor."})
    }
}

const loginUser = async(req,res) => {
    try {
        const { email, password } = req.body
        if (email != undefined) { 
            const user = await userService.getOne(email)
            if (user != undefined){ 
                const correct = bcrypt.compareSync(password, user.password)
                if (correct){ 
                    jwt.sign({id: user._id, email:  user.email}, JWTSecret, {
                    expiresIn: '48h'}, (error, token) => {
                        if(error){
                            res.status(400).json({error: "Não foi possivel gerar o token da autenticação."})
                        } else {
                            res.status(200).json({message: 'Login realizado com sucesso', token : token})
                        }
                    })
                } else {
                    res.status(401).json({error: "Suas credenciais são inválidas. Acesso negado. Tente novamente"})
                } 
            } else {
                res.status(404).json({error: "O usuário não foi encontrado"})
            }
        } else {
            res.status(404).json({error: "E-mail inválido ou não informado"})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error: "Não foi possivel realizar o login. Erro interno de servidor"})
    }
}

export default { createUser, loginUser, JWTSecret }