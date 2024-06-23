import multer, { StorageEngine } from 'multer';
import path from 'path';
import { Request } from 'express';
import fs from 'fs';

// Check file type
function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error(`Error: Images Only! - ${filetypes}`));
    }
}


const multerMiddleware = (location:string)=>{
    return multer({
        storage: multer.diskStorage({
            destination: (req: Request, file, cb) => {
                const uploadDir = `uploads/${location}`;
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }
                cb(null, uploadDir);
            },
            filename: (req: Request, file, cb) => {
                cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            }
        }),
        // limits: { fileSize: 5000000 }, // Limit file size to 5MB
        fileFilter: (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
            checkFileType(file, cb);
        }
    })
}

export default multerMiddleware;
