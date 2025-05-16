import { City } from "src/city/entities/city.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Region {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_stops: string

    @Column()
    name_ru: string

    @Column()
    name_kz: string

    @Column()
    y_lat: string

    @Column()
    x_long: string

    @Column()
    street: string

    @Column()
    district: string

    // @Column({ nullable: true })
    // image: string

    @Column()
    datetime?: string

}
