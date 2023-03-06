import { GenericController } from 'src/generics/generic.controller';
import { Reportes } from './reportes.entity';
import { ReportesService } from './reportes.service';
import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { ReporteCreateDTO } from './dto/reportes.dto';
import { Empresas } from 'src/empresas/empresas.entity';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
@UseGuards(JwtAuthGuard)

@Controller('reportes')
@ApiTags('reportes')
export class ReportesController extends GenericController<
  Reportes,
  ReportesService
> {
  constructor(private readonly reportesService: ReportesService) {
    super(reportesService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: ReporteCreateDTO })
  async create(@Body() entity: Reportes) {
    return this.reportesService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  async Update(
    @Param('id', ParseIntPipe) id: number,
    @Body() entity: Empresas,
  ) {
    return this.reportesService.update(id, entity);
  }
}
