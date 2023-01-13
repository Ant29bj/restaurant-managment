import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { GrupoProductoCreateDto } from './dto/grupo_producto.dto';
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

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: GrupoProductoCreateDto, required: true })
  async create(@Body() entity: GrupoProducto) {
    return this.GrupoService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: GrupoProductoCreateDto, required: true })
  async Update(
    @Param('id', ParseIntPipe) id: number,
    @Body() entity: GrupoProducto,
  ) {
    return this.GrupoService.update(id, entity);
  }
}
