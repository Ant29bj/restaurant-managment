import { GenericController } from 'src/generics/generic.controller';
import { Reportes } from './reportes.entity';
import { ReportesService } from './reportes.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('reportes')
@ApiTags('reportes')
export class ReportesController extends GenericController<
  Reportes,
  ReportesService
> {
  constructor(private readonly reportesService: ReportesService) {
    super(reportesService);
  }
}
