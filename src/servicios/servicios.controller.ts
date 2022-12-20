import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { ServiciosCreateDto } from './dto/servicios.dto';
import { Servicios } from './servicios.entity';
import { ServiciosService } from './servicios.service';

@Controller('servicios')
@ApiTags('servicios')
export class ServiciosController extends GenericController<
  Servicios,
  ServiciosService
> {
  constructor(private readonly serviciosService: ServiciosService) {
    super(serviciosService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: ServiciosCreateDto, required: true })
  async create(@Body() entity: Servicios) {
    return this.serviciosService.create(entity);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: ServiciosCreateDto, required: true })
  async update(@Param('id') id: number, @Body() entity: Servicios) {
    return this.serviciosService.update(id, entity);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.serviciosService.delete(id);
  }
}
