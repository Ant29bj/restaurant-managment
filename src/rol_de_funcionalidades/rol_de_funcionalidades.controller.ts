import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { RolDeFuncionalidades } from './rol_de_funcionalidades.entity';
import { RolDeFuncionalidadesService } from './rol_de_funcionalidades.service';
@UseGuards(JwtAuthGuard)

@Controller('rol_de_funcionalidades')
export class RolDeFuncionalidadesController extends GenericController<
  RolDeFuncionalidades,
  RolDeFuncionalidadesService
> {
  constructor(
    private readonly rol_de_funcionalidadesService: RolDeFuncionalidadesService,
  ) {
    super(rol_de_funcionalidadesService);
  }
}
