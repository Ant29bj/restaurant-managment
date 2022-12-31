import { Module } from '@nestjs/common';
import { ComandaServiciosService } from './comanda_servicios.service';
import { ComandaServiciosController } from './comanda_servicios.controller';
import { ComandaServicios } from './comanda_servicios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComandaServicios])],

  providers: [ComandaServiciosService],
  controllers: [ComandaServiciosController],
})
export class ComandaServiciosModule {}
