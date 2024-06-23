import { AssignedVehicle } from '../models/assigned-vehicle.model';
import { AppDataSource } from '../data-source';

const assignedVehicleRepository = AppDataSource.getRepository(AssignedVehicle);
export class AssignedVehicleRepository {
    static async list() {
        return await assignedVehicleRepository.find({order: { createdAt: 'DESC' }});
    }

    static async findOne(assignedId: number,) {
        return await assignedVehicleRepository.findOne({ where: {  id:assignedId } });
    }

    static async assigneToDriver(vehicleId: number, driverId: number) {
        const transfer = assignedVehicleRepository.create({
            vehicleId,
            driverId,
            assignedDate: new Date()
        });
        return await assignedVehicleRepository.save(transfer);
    }

    static async update(vehicleId:number,driverId:number,data: any) {
        return await assignedVehicleRepository.update({id:vehicleId,driverId},data);
    }
}
