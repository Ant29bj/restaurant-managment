import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { CategoriaProductos } from './categoria_productos.entity';
import { CategoriaProductosService } from './categoria_productos.service';

@Controller('categoria_productos')
export class CategoriaProductosController extends GenericController<
  CategoriaProductos,
  CategoriaProductosService
> {
  constructor(private readonly categoria_productos: CategoriaProductosService) {
    super(categoria_productos);
  }
}
