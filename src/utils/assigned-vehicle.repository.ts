import { AssignedVehicle } from '../models/assigned-vehicle.model';
import { AppDataSource } from '../data-source';
import { Vehicle } from '../models/vehicle.model';
import { Driver } from '../models/driver.model';

const assignedVehicleRepository = AppDataSource.getRepository(AssignedVehicle);
export class AssignedVehicleRepository {
    static async list() {
        const data = await AppDataSource
      .getRepository(AssignedVehicle)
      .createQueryBuilder('av')
      .leftJoinAndSelect('av.vehicle', 'v') // Left join with Vehicle entity
      .leftJoinAndSelect('av.driver', 'd') // Left join with Driver entity
      .orderBy('av.createdAt', 'DESC')
      .getMany();

    return data;
    }

    static async findOne(assignedId: number,) {
        return await assignedVehicleRepository.findOne({ where: {  id:assignedId } });
    }

    static async assignToDriver(vehicle: Vehicle, driver: Driver) {
        const transfer = assignedVehicleRepository.create({
            vehicle,
            driver,
            assignedDate: new Date()
        });
        return await assignedVehicleRepository.save(transfer);
    }

    static async update(vehicle:Vehicle,driver:Driver,data: any) {
        return await assignedVehicleRepository.update({vehicle,driver},data);
    }
}
