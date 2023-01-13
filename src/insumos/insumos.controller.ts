import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';

import { InsumosCreateDto } from './dto/insumos.dto';
import { Insumos } from './insumos.entity';
import { InsumosService } from './insumos.service';

@Controller('insumos')
@ApiTags('tipo-pagos')
export class InsumosController extends GenericController<
  Insumos,
  InsumosService
> {
  constructor(private readonly insumosService: InsumosService) {
    super(insumosService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: InsumosCreateDto, required: true })
  async create(@Body() entity: Insumos) {
    return this.insumosService.create(entity);
  }

  @Patch(':id')
  @Put(':id')
  @ApiBearerAuth()
  @ApiBody({ type: InsumosCreateDto, required: true })
  async update(@Param('id', ParseIntPipe) id: number, @Body() entity: Insumos) {
    return this.insumosService.update(id, entity);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.insumosService.delete(id);
  }
}
