import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { Funcionalidades } from './funcionalidades.entity';
import { FuncionalidadesService } from './funcionalidades.service';

@Controller('funcionalidades')
export class FuncionalidadesController extends GenericController<
  Funcionalidades,
  FuncionalidadesService
> {
  constructor(private readonly funcionalidadesService: FuncionalidadesService) {
    super(funcionalidadesService);
  }
}
