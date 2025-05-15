import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { RegionModule } from './region/region.module';
import { Region } from './region/entities/region.entity';
import { City } from './city/entities/city.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Aza517097',
      database: 'stopping_point',
      entities: [Region, City],
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }),
    CityModule,
    RegionModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
