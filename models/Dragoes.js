import mongoose, { Schema } from "mongoose";

const caracteristicSchema = new mongoose.Schema({
    size: String,
    color: String,
    temperament: String,
    specialAbility: String
})

const dragaoSchema = new mongoose.Schema({
    name: String,
    description: String,
    assembler: String,
    inspiredName: String,
    caracteristics: [caracteristicSchema]
})

const Dragao = mongoose.model('Dragao', dragaoSchema)

export default Dragao