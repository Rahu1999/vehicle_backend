import { DriverController } from '../controller/driver.controller';
import { Router } from 'express';
import multerMiddleware from '../middlewares/multer.handler';
import { photoLocation } from '../constant/constant';

const router = Router();
const driverController = new DriverController();

router.get('/', driverController.list);
router.post('/',multerMiddleware(photoLocation).single('file'), driverController.create);

export default router;
