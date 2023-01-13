import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { recetasCreateDto } from './dto/recetas.dto';
import { Recetas } from './recetas.entity';
import { RecetasService } from './recetas.service';

@Controller('recetas')
@ApiTags('recetas')
export class RecetasController extends GenericController<
  Recetas,
  RecetasService
> {
  constructor(private readonly recetasService: RecetasService) {
    super(recetasService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: recetasCreateDto, required: true })
  async create(@Body() entity: Recetas) {
    return this.recetasService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: recetasCreateDto, required: true })
  async update(@Param('id', ParseIntPipe) id: number, @Body() entity: Recetas) {
    return this.recetasService.update(id, entity);
  }
}
