import { VehicleController } from '../controller/vehicle.controller';
import { Router } from 'express';

const router = Router();
const vehicleController = new VehicleController();

router.get('/', vehicleController.list);
router.post('/', vehicleController.create);

export default router;
