import { GenericController } from 'src/generics/generic.controller';
import { Empresas } from './empresas.entity';
import { EmpresasService } from './empresas.service';
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
import { EmpresaCreateDto, EmpresaUpdateDto } from './dto/empresas.dto';
@Controller('empresas')
export class EmpresasController extends GenericController<
  Empresas,
  EmpresasService
> {
  constructor(private readonly empresasService: EmpresasService) {
    super(empresasService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: EmpresaCreateDto, required: true })
  async create(@Body() entity: Empresas) {
    return this.empresasService.create(entity);
  }

  @Patch(':id')
  @Put(':id')
  @ApiBearerAuth()
  @ApiBody({ type: EmpresaUpdateDto, required: true })
  async Update(
    @Param('id', ParseIntPipe) id: number,
    @Body() entity: Empresas,
  ) {
    return this.empresasService.update(id, entity);
  }
}
