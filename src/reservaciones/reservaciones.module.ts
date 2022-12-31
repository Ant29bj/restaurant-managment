import { Module } from '@nestjs/common';
import { ReservacionesService } from './reservaciones.service';
import { ReservacionesController } from './reservaciones.controller';
import { Reservaciones } from './reservaciones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reservaciones])],

  providers: [ReservacionesService],
  controllers: [ReservacionesController],
})
export class ReservacionesModule {}
