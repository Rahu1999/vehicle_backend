import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
