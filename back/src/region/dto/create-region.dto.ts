import { IsISO8601, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRegionDto {
    @IsNotEmpty({ message: 'Название не должно быть пустым' })
    @IsString({ message: "Описание должно быть строкой" })
    id_stops!: string;

    // @IsNotEmpty({ message: 'Название не должно быть пустым' })
    // name_ru!: string;

    // @IsNotEmpty({ message: 'Название не должно быть пустым' })
    // name_kz: string;

    // @IsNotEmpty({ message: 'Название не должно быть пустым' })
    // y_lat!: string;

    // @IsNotEmpty({ message: 'Название не должно быть пустым' })
    // x_long!: string;

    // @IsNotEmpty({ message: 'Название не должно быть пустым' })
    // street!: string;

    // @IsNotEmpty({ message: 'Название не должно быть пустым' })
    // district!: string;

    // regionId!: number

    @IsOptional()
    image!: string;

    @IsOptional()
    @IsISO8601()
    datetime?: string;

}
