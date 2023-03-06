import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { DetalleReceta } from './detalle_receta.entity';
import { DetalleRecetaService } from './detalle_receta.service';
@UseGuards(JwtAuthGuard)

@Controller('detalle_receta')
export class DetalleRecetaController extends GenericController<
  DetalleReceta,
  DetalleRecetaService
> {
  constructor(private readonly detalleReceta: DetalleRecetaService) {
    super(detalleReceta);
  }
}
