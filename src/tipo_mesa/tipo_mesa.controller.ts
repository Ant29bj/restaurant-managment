import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { TipoMesa } from './tipo_mesa.entity';
import { TipoMesaService } from './tipo_mesa.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateTipoMesa } from './dto/update-tipo_mesa.dto';

@Controller('tipo_mesa')
@ApiTags('Tipo_mesa')
export class TipoMesaController extends GenericController<
  TipoMesa,
  TipoMesaService
> {
  constructor(private readonly tipoMesa: TipoMesaService) {
    super(tipoMesa);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateTipoMesa })
  async updateTipoMesa(
    @Body() tipoMesa: UpdateTipoMesa,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const mesa = await this.tipoMesa.findOne({ where: { id: id } });
    if (!mesa) {
      return new HttpException('Mesa no encontrada', HttpStatus.CONFLICT);
    }
    return this.tipoMesa.update(id, tipoMesa);
  }
}
