import { GenericController } from 'src/generics/generic.controller';
import { Productos } from './producto.entity';
import { ProductosService } from './producto.service';
import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { ProductosCreateDto } from './dto/producto.dto';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
@UseGuards(JwtAuthGuard)

@Controller('productos')
@ApiTags('Productos')
export class ProductController extends GenericController<
  Productos,
  ProductosService
> {
  constructor(private readonly productService: ProductosService) {
    super(productService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: ProductosCreateDto, required: true })
  async create(@Body() entity: Productos) {
    return this.productService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: ProductosCreateDto, required: true })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() entity: Productos,
  ) {
    return this.update(id, entity);
  }
}
