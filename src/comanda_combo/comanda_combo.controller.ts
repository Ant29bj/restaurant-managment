import { Body, Controller, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

import { GenericController } from 'src/generics/generic.controller';
import { ComandaCombo } from './comanda_combo.entity';
import { ComandaCombosService } from './comanda_combo.service';
import { ComandaCombosCreateDto } from './dto/comanda_combo.dto';
@UseGuards(JwtAuthGuard)

@Controller('comanda_combo')
@ApiTags('comanda_combos')
export class ComandaCombosController extends GenericController<
  ComandaCombo,
  ComandaCombosService
> {
  constructor(private readonly ComandaCombosService: ComandaCombosService) {
    super(ComandaCombosService);
  }
  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: ComandaCombosCreateDto, required: true })
  async create(@Body() entity: any) {
    return this.ComandaCombosService.create(entity);
  }

  @Put('id')
  @Patch('id')
  @ApiBearerAuth()
  @ApiBody({ type: ComandaCombosCreateDto, required: true })
  async update(@Param('id') id: number, @Body() entity: any) {
    return this.ComandaCombosService.update(id, entity);
  }
}
