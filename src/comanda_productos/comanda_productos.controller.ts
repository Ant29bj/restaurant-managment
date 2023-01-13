import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { ComandaProductos } from './comanda_productos.entity';
import { ComandaProductosService } from './comanda_productos.service';

@Controller('comanda_productos')
export class ComandaProductosController extends GenericController<
  ComandaProductos,
  ComandaProductosService
> {
  constructor(private readonly comanda_productos: ComandaProductosService) {
    super(comanda_productos);
  }
}
