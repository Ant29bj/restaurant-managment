import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { Agrupacion } from './agrupacion.entity';
import { AgrupacionService } from './agrupacion.service';

@Controller('agrupacion')
@ApiTags('agrupacion')
export class AgrupacionController extends GenericController<
  Agrupacion,
  AgrupacionService
> {
  constructor(private readonly agrupacionService: AgrupacionService) {
    super(agrupacionService);
  }
}
