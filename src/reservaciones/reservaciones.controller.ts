import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { Reservaciones } from './reservaciones.entity';
import { ReservacionesService } from './reservaciones.service';

@Controller('reservaciones')
export class ReservacionesController extends GenericController<
  Reservaciones,
  ReservacionesService
> {
  constructor(private readonly reservaionesService: ReservacionesService) {
    super(reservaionesService);
  }
}
