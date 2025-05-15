import { Region } from "src/region/entities/region.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_stops: string

    @Column()
    name_ru: string

    @Column()
    pocket: string

    @Column()
    playground: string

    @Column()
    traffic_sign: string

    @Column()
    old_pavilions: string

    @Column()
    description: string

    @Column()
    district: string

    @Column()
    datetime?: string;




}
