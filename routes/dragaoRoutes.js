import express from 'express';
import dragaoControllers from '../controllers/dragaoController.js';
import Auth from '../middleware/Auth.js';

const dragaoRoutes = express.Router()

dragaoRoutes.get("/dragoes", Auth.Authorization, dragaoControllers.getAllDragoes)

dragaoRoutes.post("/dragoes", Auth.Authorization, dragaoControllers.createDragao)

dragaoRoutes.delete("/dragoes/:id", Auth.Authorization, dragaoControllers.deleteDragao)

dragaoRoutes.put("/dragoes/:id", Auth.Authorization, dragaoControllers.updateDragao)

export default dragaoRoutes;