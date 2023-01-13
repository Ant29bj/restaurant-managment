import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { ComandaServicios } from './comanda_servicios.entity';
import { ComandaServiciosService } from './comanda_servicios.service';

@Controller('comanda_servicios')
export class ComandaServiciosController extends GenericController<
  ComandaServicios,
  ComandaServiciosService
> {
  constructor(private readonly comanda_servicios: ComandaServiciosService) {
    super(comanda_servicios);
  }
}
