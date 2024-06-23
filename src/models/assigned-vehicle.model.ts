import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vehicle } from './vehicle.model';
import { Driver } from './driver.model';


@Entity()
export class AssignedVehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Vehicle)
    @JoinColumn()
    vehicle: Vehicle;

    @ManyToOne(() => Driver)
    @JoinColumn()
    driver: Driver;

    @Column()
    assignedDate: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
