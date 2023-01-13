import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { ReservacionesCreateDto } from './dto/reservaciones.dto';
import { Reservaciones } from './reservaciones.entity';
import { ReservacionesService } from './reservaciones.service';

@Controller('reservaciones')
export class ReservacionesController extends GenericController<
  Reservaciones,
  ReservacionesService
> {
  constructor(private readonly reservaionesService: ReservacionesService) {
    super(reservaionesService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: ReservacionesCreateDto, required: true })
  async create(@Body() entity: Reservaciones) {
    return this.reservaionesService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: ReservacionesCreateDto, required: true })
  async update(@Param('id') id: number, @Body() entity: Reservaciones) {
    return this.reservaionesService.update(id, entity);
  }
}
