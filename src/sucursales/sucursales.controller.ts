import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { SucuralesCreateDto } from './dto/sucursales.dto';
import { Sucursales } from './sucursales.entity';
import { SucursalesService } from './sucursales.service';

@Controller('sucursales')
export class SucursalesController extends GenericController<
  Sucursales,
  SucursalesService
> {
  constructor(private readonly sucursalesService: SucursalesService) {
    super(sucursalesService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: SucuralesCreateDto, required: true })
  async create(@Body() entity: Sucursales) {
    return this.sucursalesService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: SucuralesCreateDto, required: true })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() entity: Sucursales,
  ) {
    return this.sucursalesService.update(id, entity);
  }
}
