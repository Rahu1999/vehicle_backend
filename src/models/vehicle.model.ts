import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vehicleNumber: string;

    @Column()
    vehicleType: string;

    @Column()
    pucCertificate: string;

    @Column()
    insuranceCertificate: string;
}
