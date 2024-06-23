import { Router } from 'express';
import { AssignedController } from '../controller/assigned-vehicle.controller';

const router = Router();
const assignedController = new AssignedController();

router.post('/', assignedController.assigneToDriver);

export default router;