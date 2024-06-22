import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Vehicle } from './vehicle.model';
import { Driver } from './driver.model';

@Entity()
export class Transfer {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Vehicle)
    @JoinColumn()
    vehicle: Vehicle;

    @ManyToOne(() => Driver)
    @JoinColumn()
    fromDriver: Driver;

    @ManyToOne(() => Driver)
    @JoinColumn()
    toDriver: Driver;

    @Column()
    transferDate: Date;
}
