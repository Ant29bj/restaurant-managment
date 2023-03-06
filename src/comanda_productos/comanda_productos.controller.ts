import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { ComandaProductos } from './comanda_productos.entity';
import { ComandaProductosService } from './comanda_productos.service';
@UseGuards(JwtAuthGuard)

@Controller('comanda_productos')
export class ComandaProductosController extends GenericController<
  ComandaProductos,
  ComandaProductosService
> {
  constructor(private readonly comanda_productos: ComandaProductosService) {
    super(comanda_productos);
  }
}
