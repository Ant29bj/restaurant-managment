import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { ComboDetalle } from './combo_detalle.entity';
import { ComboDetalleService } from './combo_detalle.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { ComboDetalleCreateDto } from './dto/combo_detalle.dto';

@Controller('combo_detalle')
@ApiTags('Combo_Detalle')
export class ComboDetalleController extends GenericController<
  ComboDetalle,
  ComboDetalleService
> {
  constructor(private readonly comboDetalleService: ComboDetalleService) {
    super(comboDetalleService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: ComboDetalleCreateDto, required: true })
  async create(@Body() entity: ComboDetalle) {
    return this.comboDetalleService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: ComboDetalleCreateDto, required: true })
  async Update(
    @Param('id', ParseIntPipe) id: number,
    @Body() entity: ComboDetalle,
  ) {
    return this.comboDetalleService.create(entity);
  }
}
