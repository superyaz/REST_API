/**
 * importo las dependencias
 */
import { Router } from "express";
import Task from '../models/Task'

const router = Router()

/**
 * Declaración de rutas para mi servidor
 */
router.get('/', (req, res) => {
    res.send('Hola care verga')
})

router.post('/', async (req, res) => {
    const newTask = new Task({ title: req.body.title, description: req.body.description })
    const taskSave = await newTask.save()
    res.json(taskSave)
})

export default router