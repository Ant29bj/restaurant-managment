import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { TipoPagosCreateDto } from './dto/tipo_pagos.dto';
import { TipoPagos } from './tipo_pagos.entity';
import { TipoPagosService } from './tipo_pagos.service';
@UseGuards(JwtAuthGuard)

@Controller('tipo-pagos')
@ApiTags('tipo-pagos')
export class TipoPagosController extends GenericController<
  TipoPagos,
  TipoPagosService
> {
  constructor(private readonly tipoPagosService: TipoPagosService) {
    super(tipoPagosService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: TipoPagosCreateDto, required: true })
  async create(@Body() entity: TipoPagos) {
    return this.tipoPagosService.create(entity);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: TipoPagosCreateDto, required: true })
  async update(@Param('id') id: number, @Body() entity: TipoPagos) {
    return this.tipoPagosService.update(id, entity);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tipoPagosService.delete(id);
  }
}
