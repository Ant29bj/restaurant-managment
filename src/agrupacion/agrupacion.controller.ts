import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { Agrupacion } from './agrupacion.entity';
import { AgrupacionService } from './agrupacion.service';
import { AgrupacionCreateDto } from './dto/agrupacion.dto';
@Controller('agrupacion')
@ApiTags('agrupacion')
export class AgrupacionController extends GenericController<
  Agrupacion,
  AgrupacionService
> {
  constructor(private readonly agrupacionService: AgrupacionService) {
    super(agrupacionService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: AgrupacionCreateDto, required: true })
  async create(@Body() entity: Agrupacion) {
    return this.agrupacionService.create(entity);
  }

  @Put('id')
  @Patch('id')
  @ApiBearerAuth()
  @ApiBody({ type: AgrupacionCreateDto, required: true })
  async update(@Param('id') id: number, @Body() entity: Agrupacion) {
    return this.agrupacionService.update(id, entity);
  }
}
