import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

import { GenericController } from 'src/generics/generic.controller';
import { ComandaCombo } from './comanda_combo.entity';
import { ComandaCombosService } from './comanda_combo.service';
import { ComandaCombosCreateDto } from './dto/comanda_combo.dto';

@Controller('comandaCombos')
@ApiTags('comandaCombos')
export class comandaCombosController extends GenericController<
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
