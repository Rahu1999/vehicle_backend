import { TransferController } from '../controller/transfer.controller';
import { Router } from 'express';

const router = Router();
const transferController = new TransferController();

router.post('/transfer', transferController.transfer);
router.get('/history', transferController.history);

export default router;
