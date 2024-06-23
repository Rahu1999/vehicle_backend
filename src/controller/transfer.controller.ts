import { NextFunction, Request, Response } from 'express';
import { TransferRepository } from '../utils/transfer.repository';
import sendSuccessResponse from '../middlewares/success-handler';
import { AssignedVehicleRepository } from '../utils/assigned-vehicle.repository';
import { VehicleRepository } from '../utils/vehicle.repository';
import { DriverRepository } from '../utils/driver.repository';

export class TransferController {
    async transfer(req: Request, res: Response, next: NextFunction) {
        try {
            const { vehicleId, fromDriverId, toDriverId } = req.body;
            const vehicle = await VehicleRepository.findOne(vehicleId);
            if (!vehicle) return res.status(404).json({ message: "vehicle not found" })
            const fromDriver = await DriverRepository.findOne(fromDriverId);
            if (!fromDriver) return res.status(404).json({ message: "fromDriver not found" })
            const toDriver = await DriverRepository.findOne(toDriverId);
            if (!toDriver) return res.status(404).json({ message: "toDriver not found" })
            const result = await TransferRepository.transfer(vehicleId, fromDriverId, toDriverId);
            await AssignedVehicleRepository.update(vehicle,fromDriver,{driver:toDriver})
            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }

    }

    async history(req: Request, res: Response) {
        const result = await TransferRepository.history();
        sendSuccessResponse(req, res, { result })
    }
}
