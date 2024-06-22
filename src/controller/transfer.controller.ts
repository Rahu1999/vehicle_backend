import { NextFunction, Request, Response } from 'express';
import { TransferRepository } from '../utils/transfer.repository';
import sendSuccessResponse from '../middlewares/success-handler';

export class TransferController {
    async transfer(req: Request, res: Response,next : NextFunction) {
        try {
            const { vehicleId, fromDriverId, toDriverId } = req.body;
        const result = TransferRepository.transfer( vehicleId, fromDriverId, toDriverId );

            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }
        
    }

    async history(req: Request, res: Response) {
        const transfers = await TransferRepository.find();
        res.json(transfers);
    }
}
