import { AppDataSource } from '../data-source';
import { Vehicle } from '../models/vehicle.model';

const vehicleRepository = AppDataSource.getRepository(Vehicle);
export class VehicleRepository {
    static async list() {
        return await vehicleRepository.find({order: { createdAt: 'DESC' }});
    }

    static async findOne(vehicleId: number,) {
        return await vehicleRepository.findOne({ where: {  id:vehicleId } });
    }

    static async create(data: any) {
        return await vehicleRepository.save(data);
    }

    static async update(vehicleId:number,data: any) {
        return await vehicleRepository.update({id:vehicleId},data);
    }

    static async unassign() {
        return await vehicleRepository.find({where:{isAssigned:false},order: { createdAt: 'DESC' }});
    }
}
