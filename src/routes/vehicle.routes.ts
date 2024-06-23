import multerMiddleware from '../middlewares/multer.handler';
import { VehicleController } from '../controller/vehicle.controller';
import { Router } from 'express';
import { certificate } from '../constant/constant';

const router = Router();
const vehicleController = new VehicleController();

router.get('/', vehicleController.list);
router.post('/',
multerMiddleware(certificate).fields([
    { name: 'pucCertificate', maxCount: 1 },
    { name: 'insuranceCertificate', maxCount: 1 }
]),
vehicleController.create);

export default router;
