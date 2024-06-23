import { NextFunction, Request, Response } from 'express';
import { TransferRepository } from '../utils/transfer.repository';
import sendSuccessResponse from '../middlewares/success-handler';
import { AssignedVehicleRepository } from '../utils/assigned-vehicle.repository';

export class TransferController {
    async transfer(req: Request, res: Response, next: NextFunction) {
        try {
            const { vehicleId, fromDriverId, toDriverId } = req.body;
            const result = await TransferRepository.transfer(vehicleId, fromDriverId, toDriverId);
            await AssignedVehicleRepository.update(vehicleId,fromDriverId,{driverId:toDriverId})
            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }

    }

    async history(req: Request, res: Response) {
        const transfers = await TransferRepository.history();
        res.json(transfers);
    }
}
