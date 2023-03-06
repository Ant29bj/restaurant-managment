import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { ComandaServicios } from './comanda_servicios.entity';
import { ComandaServiciosService } from './comanda_servicios.service';
@UseGuards(JwtAuthGuard)

@Controller('comanda_servicios')
export class ComandaServiciosController extends GenericController<
  ComandaServicios,
  ComandaServiciosService
> {
  constructor(private readonly comanda_servicios: ComandaServiciosService) {
    super(comanda_servicios);
  }
}
