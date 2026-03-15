import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import Dragao from './models/Dragoes.js';
dotenv.config()

const app = express()


app.use(express.json())



mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Conectado ao banco de dados na nuvem do MongoDB Atlas com sucesso")).catch((error) => console.log(error))

const port = 4000;

app.listen(port, (error) => {
    if(error){
        console.log(error)
    }else{
        console.log(`Servidor iniciado em: http://localhost:${port}`)
    }
})

