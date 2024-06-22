import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

function errorHandlingMiddleWare(err: unknown, req: Request, res: Response, next: NextFunction) {
    // ORM errors
    if (err instanceof QueryFailedError) {
        // Check if duplicate error
        if (err.driverError.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ status: 400, error: 'Duplicate Entry', data: null });
        }

        if (err.driverError.code === 'ER_NO_DEFAULT_FOR_FIELD') {
            return res.status(400).json({ status: 400, error: 'Missing Fields in Request', data: null });
        }
    }
    return res.status(500).json({ status: 500, error: "Something went wrong" });
}
export default errorHandlingMiddleWare;
