import { NextFunction, Request, Response } from 'express';
import sendSuccessResponse from '../middlewares/success-handler';
import { DriverRepository } from '../utils/driver.repository';


export class DriverController {
    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await DriverRepository.list();
            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await DriverRepository.create(req.body);
            sendSuccessResponse(req, res, { message: 'Driver created successfully', result })
        } catch (error) {
            return next(error)
        }

    }
}