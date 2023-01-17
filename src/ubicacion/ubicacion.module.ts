import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionController } from './ubicacion.controller';
import { Ubicacion } from './ubicacion.entity';
import { UbicacionService } from './ubicacion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ubicacion])],
  controllers: [UbicacionController],
  providers: [UbicacionService],
})
export class UbicacionModule {}
