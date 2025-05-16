import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) { }

  @Post()
  // @UseInterceptors(FileInterceptor('image'))
  create(
    // @UploadedFile() file: Express.Multer.File,
    @Body() createRegionDto: CreateRegionDto) {
    // if (file) {
    //   createRegionDto.image = file.filename;
    // }
    return this.regionService.post(createRegionDto);
  }

  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
