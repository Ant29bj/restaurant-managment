import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { CategoriaProductos } from './categoria_productos.entity';
import { CategoriaProductosService } from './categoria_productos.service';
@UseGuards(JwtAuthGuard)

@Controller('categoria_productos')
export class CategoriaProductosController extends GenericController<
  CategoriaProductos,
  CategoriaProductosService
> {
  constructor(private readonly categoria_productos: CategoriaProductosService) {
    super(categoria_productos);
  }
}
