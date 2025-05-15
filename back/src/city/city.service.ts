import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City) private readonly cityRepo: Repository<City>,
  ) { }

  async post(createCityDto: CreateCityDto) {
    const city = await this.cityRepo.create({
      ...createCityDto,
      datetime: new Date().toISOString(),
    })
    await this.cityRepo.save(city)
    return city;
  }

  async findAll(): Promise<{ cityOP: number; cities: City[] }> {
    const [cities, cityOP] = await this.cityRepo.findAndCount();
    return { cityOP, cities };
  }

  async findOne(id: number): Promise<City | null> {
    return await this.cityRepo.findOneBy({ id: id });
  }


  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
