import Dragao from "../models/Dragoes.js"

class dragaoService {
    //Método para listar todos os dragões
    async getAll() {
        try {
            const dragao = await Dragao.find()
            return dragao
        } catch (error) {
            console.log(error)
        }
    }

    //Método cadastrar um dragão
    async Create(name, description, assembler, inspiredName, caracteristics){
        try {
            const newDragao = new Dragao ({
                name,
                description,
                assembler,
                inspiredName,
                caracteristics
            })
            await newDragao.save()
        } catch (error) {
            console.log(error)
        }
    }

    //Método excluir um dragão
    async Delete(id){
        try {
            await Dragao.findByIdAndDelete(id)
            console.log(`Dragão com as id ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }
    }

    //Método para alterar um dragão
    async Update(id, name, description, assembler, inspiredName, caracteristics){
        try {
            await Dragao.findByIdAndUpdate(id, {
                name,
                description,
                assembler,
                inspiredName,
                caracteristics
            })
            console.log(`O dragão com a id ${id} foi alterado.`)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new dragaoService()