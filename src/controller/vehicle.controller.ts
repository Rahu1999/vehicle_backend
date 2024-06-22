import { NextFunction, Request, Response } from 'express';
import { VehicleRepository } from '../utils/vehicle.repository';
import sendSuccessResponse from '../middlewares/success-handler';

export class VehicleController {
    async list(req: Request, res: Response,next:NextFunction) {
        try {
            const result = await VehicleRepository.list();
            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }
    }

    async create(req: Request, res: Response,next:NextFunction) {
        try {
            const result = await VehicleRepository.create(req.body);
            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }
    }
}
