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
import { Comedor } from './comedor.entity';
import { ComedorService } from './comedor.service';
import { ComedorCreateDto } from './dto/comedor.dto';

@Controller('comedor')
export class ComedorController extends GenericController<
  Comedor,
  ComedorService
> {
  constructor(private readonly comedorService: ComedorService) {
    super(comedorService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: ComedorCreateDto, required: true })
  async create(@Body() entity: Comedor) {
    return this.comedorService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: ComedorCreateDto, required: true })
  async update(@Param('id', ParseIntPipe) id: number, @Body() entity: Comedor) {
    return this.comedorService.update(id, entity);
  }
}
