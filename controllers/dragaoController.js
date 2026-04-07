import dragaoService from "../services/dragaoService.js";
import {ObjectId} from "mongodb";

// função para tratar a requisição de listar um dragão
const getOneDragao = async (req, res) => {
    try{
        const id = req.params.id
        if(ObjectId.isValid(id)){
            const dragao = await dragaoService.getOne(id)
            if (!dragao){ 
                res.status(404).jsom({ error: 'O dragão buscado não foi encontrado.' })
            } else { 
                res.status(200).json({ dragao })
            }
        } else {
            res.status(400).json({ error: 'A ID informada é inválida.' })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
}

//Função para tratar a requisição de listar os dragões
const getAllDragoes = async (req,res) => {
    try {
        const dragoes = await dragaoService.getAll()
        res.status(200).json({dragoes : dragoes })
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Erro interno de servidor, não foi possivel listar os dragões"})
    }
}

//Função para tratar a requisição de cadastrar um dragão
const createDragao = async(req,res) => {
    try {
        const {name, description, assembler, inspiredName, caracteristics} = req.body
        await dragaoService.Create(name, description, assembler, inspiredName, caracteristics)
        res.status(201).json({message: 'O dragão foi cadastrado com sucesso'})
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Erro interno de servidor, não foi possivel cadastrar os dragões"})
    }
}

//Função para tratar a requisição de deletar um dragão
const deleteDragao = async (req,res) => {
    try {
        const id = req.params.id
         if (ObjectId.isValid(id)) {
            await dragaoService.Delete(id)
            res.status(204).json({message: 'O dragão foi excluido com sucesso'})
        } else {
            res.status(400).json({error: 'Ocorreu um erro na válidação da ID.'})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Erro interno de servidor, não foi possivel cadastrar os dragões"})
    }
}

//Função para tratar a requisição de alterar um dragão
const updateDragao = async (req,res) => {
    try {
        const id = req.params.id
        if (ObjectId.isValid(id)) {
            const {name, description, assembler, inspiredName, caracteristics} = req.body
            await dragaoService.Update(id, name, description, assembler, inspiredName, caracteristics)
            res.status(200).json({message: 'Dragão atualizado com sucesso'})
        } else {
            res.status(400).json({error: 'Ocorreu um erro na válidação da ID.'})    
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Erro interno do servidor.'})
    }
}


export default { getOneDragao, getAllDragoes, createDragao, deleteDragao, updateDragao}