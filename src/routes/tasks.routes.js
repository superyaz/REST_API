/**
 * importo las dependencias
 */
import { Router } from "express";

import * as taskCtrl from '../controllers/task.controller'

const router = Router()
router.post('/', taskCtrl.createTask);
router.get('/', taskCtrl.findAllTask);
router.get('/:id', taskCtrl.findOnetask);





export default router