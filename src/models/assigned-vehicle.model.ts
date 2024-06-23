import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Vehicle } from './vehicle.model';
import { Driver } from './driver.model';

@Entity()
export class AssignedVehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vehicleId: number;

    @Column()
    driverId: number;

    @Column()
    assignedDate: Date;
}
