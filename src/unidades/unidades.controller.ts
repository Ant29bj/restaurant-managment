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
import { UnidadesCreateDto } from './dto/unidades.dto';
import { Unidades } from './unidades.entity';
import { UnidadesService } from './unidades.service';

@Controller('unidades')
@ApiTags('unidades')
export class UnidadesController extends GenericController<
  Unidades,
  UnidadesService
> {
  constructor(private readonly unidadesService: UnidadesService) {
    super(unidadesService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: UnidadesCreateDto, required: true })
  async create(@Body() entity: Unidades) {
    return this.unidadesService.create(entity);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: UnidadesCreateDto, required: true })
  async update(@Param('id') id: number, @Body() entity: Unidades) {
    return this.unidadesService.update(id, entity);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.unidadesService.delete(id);
  }
}
