import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from 'dotenv';

// Load the .env file
dotenv.config();


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'vehicle_db',
    synchronize: false,
    logging: false,
    entities: [],
});