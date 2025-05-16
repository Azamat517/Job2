import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegionService {

  constructor(
    @InjectRepository(Region) private readonly regionRepo: Repository<Region>,
  ) { }
  async post(createRegionDto: CreateRegionDto, imageFilename?: string,) {
    const region = await this.regionRepo.create({
      ...createRegionDto,
      // image: imageFilename ?? createRegionDto.image,
      datetime: new Date().toLocaleString(),
    })
    await this.regionRepo.save(region)
    return region;
  }

  async findAll(): Promise<{ regOP: number; cities: Region[] }> {
    const [cities, regOP] = await this.regionRepo.findAndCount();
    return { regOP, cities };
  }



  async findOne(id: number): Promise<Region | null> {
    return await this.regionRepo.findOneBy({ id: id });
  }

  async remove(id: number) {
    await this.regionRepo.delete({ id });
    return id;
  }

  
  async clear() {
    try {
      const isEmpty = await this.regionRepo.countBy({});
      if (isEmpty) {
        await this.regionRepo.delete({});
      }
    } catch {
      throw new Error('Clear error');
    }
  }
}
