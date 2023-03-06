import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Get,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { EquivalenciasMedidasCreateDto } from './dto/equivalencias_medidas.dto';
import { EquivalenciasMedidas } from './equivalencias_medidas.entity';
import { EquivalenciasMedidasService } from './equivalencias_medidas.service';
@UseGuards(JwtAuthGuard)

@Controller('equivalencias_medidas')
export class EquivalenciasMedidasController extends GenericController<
  EquivalenciasMedidas,
  EquivalenciasMedidasService
> {
  constructor(
    private readonly equivalenciasMedidasService: EquivalenciasMedidasService,
  ) {
    super(equivalenciasMedidasService);
  }

  @Get()
  getEquivs() {
    return this.equivalenciasMedidasService.getEquivs();
  }

  @Get(':id')
  getEquiv(@Param('id', ParseIntPipe) id: number) {
    return this.equivalenciasMedidasService.getEquiv(id);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: EquivalenciasMedidasCreateDto, required: true })
  async create(@Body() entity: EquivalenciasMedidas) {
    return this.equivalenciasMedidasService.create(entity);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: EquivalenciasMedidasCreateDto, required: true })
  async update(@Param('id') id: number, @Body() entity: EquivalenciasMedidas) {
    return this.equivalenciasMedidasService.update(id, entity);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.equivalenciasMedidasService.delete(id);
  }

  // @Post(':id/unidad')
  // createUnidad(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() entity: UnidadesCreateDto,
  // ) {
  //   return this.equivalenciasMedidasService.createUnidad(id, entity);
  // }
}
