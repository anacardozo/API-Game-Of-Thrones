import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import Dragao from './models/Dragoes.js';
import dragaoRoutes from "./routes/dragaoRoutes.js";
dotenv.config()

const app = express()


app.use(express.json())

app.use('/', dragaoRoutes)

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Conectado ao banco de dados na nuvem do MongoDB Atlas com sucesso")).catch((error) => console.log(error))

const port = 4000;

app.get('/ver-banco', async (req, res) => {
    try {
        const dragoesNoBanco = await Dragao.find();
        res.json({
            quantidade: dragoesNoBanco.length,
            dados: dragoesNoBanco
        });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

app.listen(port, (error) => {
    if(error){
        console.log(error)
    }else{
        console.log(`Servidor iniciado em: http://localhost:${port}`)
    }
})

