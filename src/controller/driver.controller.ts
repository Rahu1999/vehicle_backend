import { NextFunction, Request, Response } from 'express';
import sendSuccessResponse from '../middlewares/success-handler';
import { DriverRepository } from '../utils/driver.repository';
import { UploadRepository } from '../utils/file.repository';


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
            const fileData = {
                filename: req.file.filename,
                path: req.file.path,
                size: req.file.size,
                mimetype: req.file.mimetype
            };
            const file = await UploadRepository.create(fileData);
            const result = await DriverRepository.create({ ...req.body, profilePhoto: req.file.filename, profilePhotoId: file.id });
            sendSuccessResponse(req, res, { message: 'Driver created successfully', result })
        } catch (error) {
            return next(error)
        }

    }
}