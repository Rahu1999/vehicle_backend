import { AppDataSource } from '../data-source';
import { Driver } from '../models/driver.model';

const driverRepository = AppDataSource.getRepository(Driver);
export class DriverRepository {
    static async list() {
        return await driverRepository.find();
    }
    static async findOne(driverId: number) {
        return await driverRepository.findOne({ where: {  id:driverId } });
    }

    static async create(data: any) {
        const driver = driverRepository.create(data);
        return await driverRepository.save(driver);
    }
}
