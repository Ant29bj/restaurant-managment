import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { Funcionalidades } from './funcionalidades.entity';
import { FuncionalidadesService } from './funcionalidades.service';
@UseGuards(JwtAuthGuard)

@Controller('funcionalidades')
export class FuncionalidadesController extends GenericController<
  Funcionalidades,
  FuncionalidadesService
> {
  constructor(private readonly funcionalidadesService: FuncionalidadesService) {
    super(funcionalidadesService);
  }
}
