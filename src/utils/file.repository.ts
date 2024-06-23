import { Upload } from '../models/upload.models';
import { AppDataSource } from '../data-source';

const uploadRepository = AppDataSource.getRepository(Upload);
export class UploadRepository {
    static async list() {
        return await uploadRepository.find();
    }
    static async findOne(fileId: number) {
        return await uploadRepository.findOne({ where: { id: fileId } });
    }

    static async create(data: any) {

        return await uploadRepository.save(data);
    }
}
