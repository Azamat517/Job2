import { IsISO8601, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCityDto {

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })

    id_stops!: string;

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    name_ru!: string;

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    pocket!: string;

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    playground!: string;

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    traffic_sign!: string;

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    old_pavilions!: string;

    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    description!: string;
    
    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    district!: string;

    @IsOptional()
    @IsISO8601()
    datetime?: string;

}
