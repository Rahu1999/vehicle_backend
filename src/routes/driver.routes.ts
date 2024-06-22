import { DriverController } from '../controller/driver.controller';
import { Router } from 'express';

const router = Router();
const driverController = new DriverController();

router.get('/', driverController.list);
router.post('/', driverController.create);

export default router;
