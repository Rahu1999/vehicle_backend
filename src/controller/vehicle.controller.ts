import { NextFunction, Request, Response } from 'express';
import { VehicleRepository } from '../utils/vehicle.repository';
import sendSuccessResponse from '../middlewares/success-handler';
import { UploadRepository } from '../utils/file.repository';

export class VehicleController {
    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await VehicleRepository.list();
            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {

            const pucFile = req.files?.['pucCertificate']?.[0];
            const insuranceFile = req.files?.['insuranceCertificate']?.[0];

            if (!pucFile || !insuranceFile) {
                return res.status(400).send('Both files are required!');
            }

            const pucData = {
                filename: pucFile.filename,
                path: pucFile.path,
                size: pucFile.size,
                mimetype: pucFile.mimetype
            };
            const insuranceData = {
                filename: insuranceFile.filename,
                path: insuranceFile.path,
                size: insuranceFile.size,
                mimetype: insuranceFile.mimetype
            };
            const puc = await UploadRepository.create(pucData);
            const insurance = await UploadRepository.create(insuranceData);

            const vehicleData= {
                ...req.body,
                pucCertificate:pucFile.filename,
                pucCertificateId: puc.id,
                insuranceCertificateId:insurance.id ,
                insuranceCertificate: insuranceFile.filename,
            }
            const result = await VehicleRepository.create(vehicleData);
            sendSuccessResponse(req, res, { result })
        } catch (error) {
            return next(error)
        }
    }
}
