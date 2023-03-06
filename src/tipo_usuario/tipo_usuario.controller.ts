import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { TipoUsuario } from './tipo_usuario.entity';
import { TipoUsuarioService } from './tipo_usuario.service';
@UseGuards(JwtAuthGuard)

@Controller('tipo_usuario')
@ApiTags('tipo_usuario')
export class TipoUsuarioController extends GenericController<
  TipoUsuario,
  TipoUsuarioService
> {
  constructor(private tipoUsuario: TipoUsuarioService) {
    super(tipoUsuario);
  }
}
