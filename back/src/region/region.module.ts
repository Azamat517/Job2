import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Module({
  imports: [TypeOrmModule.forFeature([Region]),
  MulterModule.register({
    storage: diskStorage({
      destination: join(__dirname, '..', '..', 'uploads'),
      filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${unique}${extname(file.originalname)}`);
      },
    }),
  }),
],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule { }
