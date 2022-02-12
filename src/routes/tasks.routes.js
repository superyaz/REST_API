/**
 * importo las dependencias
 */
import { Router } from "express";

const router = Router()

/**
 * Declaración de rutas para mi servidor
 */
router.get('/', (req, res) => {
    res.send('Tasks')
})

export default router