import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { UnidadesCreateDto } from './dto/unidades.dto';
import { Unidades } from './unidades.entity';
import { UnidadesService } from './unidades.service';
import { Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
@UseGuards(JwtAuthGuard)

@Controller('unidades')
@ApiTags('unidades')
export class UnidadesController extends GenericController<
  Unidades,
  UnidadesService
> {
  constructor(private readonly unidadesService: UnidadesService) {
    super(unidadesService);
  }

  @Get()
  getUnidades() {
    return this.unidadesService.getUnidades();
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: UnidadesCreateDto, required: true })
  async createUnidad(@Body() entity: Unidades) {
    return this.unidadesService.createUnidad(entity);
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
