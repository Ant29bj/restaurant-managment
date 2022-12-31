import { GenericController } from 'src/generics/generic.controller';
import { Productos } from './producto.entity';
import { ProductosService } from './producto.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('productos')
@ApiTags('Productos')
export class ProductController extends GenericController<
  Productos,
  ProductosService
> {
  constructor(private readonly productService: ProductosService) {
    super(productService);
  }
}
