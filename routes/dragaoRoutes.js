import express from 'express';
import dragaoControllers from '../controllers/dragaoControllers.js';

const dragaoRoutes = express.Router()

dragaoRoutes.get("/dragoes", dragaoControllers.getAllDragoes)

dragaoRoutes.post("/dragoes", dragaoControllers.createDragao)

dragaoRoutes.delete("/dragoes/:id", dragaoControllers.deleteDragao)

dragaoRoutes.put("/dragoes/:id", dragaoControllers.updateDragao)

export default dragaoRoutes;