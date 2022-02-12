/**
 * importo las dependencias
 */
import { Router } from "express";
import Task from '../models/Task'

const router = Router()

/**
 * Declaración de rutas para mi servidor
 */
router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/', async (req, res) => {
    const newTask = new Task({ title: req.body.title, description: req.body.description })
    const taskSave = await newTask.save()
    res.json(taskSave)
})

export default router