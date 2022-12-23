import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { GrupoProducto } from './grupo_producto.entity';
import { GrupoProductoService } from './grupo_producto.service';

@Controller('grupo_producto')
@ApiTags('Grupo de Productos')
export class GrupoProductoController extends GenericController<
  GrupoProducto,
  GrupoProductoService
> {
  constructor(private readonly GrupoService: GrupoProductoService) {
    super(GrupoService);
  }
}
