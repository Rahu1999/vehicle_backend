import { AppDataSource } from '../data-source';
import { Transfer } from '../models/transfer.model';
import { VehicleRepository } from './vehicle.repository';
import { DriverRepository } from './driver.repository';

const transferRepository = AppDataSource.getRepository(Transfer);
export class TransferRepository {
    static async transfer(vehicleId: number, fromDriverId: number, toDriverId: number) {
        const vehicle = await VehicleRepository.findOne(vehicleId);
        const fromDriver = await DriverRepository.findOne(fromDriverId);
        const toDriver = await DriverRepository.findOne(toDriverId);

        const transfer = transferRepository.create({
            vehicle,
            fromDriver,
            toDriver,
            transferDate: new Date()
        });

        return await transferRepository.save(transfer);
    }

    static async history() {
        return await transferRepository.find({ relations: ["vehicle", "fromDriver", "toDriver"],order: { createdAt: 'DESC' } });
    }
    
    static async findOne(transferId: number,) {
        return await transferRepository.findOne({ where: {  id:transferId } });
    }
    static async find() {
        return await transferRepository.find({ relations: ["vehicle", "fromDriver", "toDriver"] ,order: { createdAt: 'DESC' }});
    }
}
