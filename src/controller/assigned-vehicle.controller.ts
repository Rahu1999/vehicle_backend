import { NextFunction, Request, Response } from 'express';
import sendSuccessResponse from '../middlewares/success-handler';
import { VehicleRepository } from '../utils/vehicle.repository';
import { DriverRepository } from '../utils/driver.repository';
import { AssignedVehicleRepository } from '../utils/assigned-vehicle.repository';

export class AssignedController {
    async assignToDriver(req: Request, res: Response, next: NextFunction) {
        try {
            const { vehicleId, driverId } = req.body;
            const vehicle = await VehicleRepository.findOne(vehicleId);
            if (!vehicle) return res.status(404).json({ message: "vehicle not found" })
            const driver = await DriverRepository.findOne(driverId);
            if (!driver) return res.status(404).json({ message: "driver not found" })
            const result = await AssignedVehicleRepository.assignToDriver(vehicle, driver)
            // updating the vehicle status
            await VehicleRepository.update(vehicleId, { isAssigned: true })
            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }
    }
    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await AssignedVehicleRepository.list();
            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }
    }
}
