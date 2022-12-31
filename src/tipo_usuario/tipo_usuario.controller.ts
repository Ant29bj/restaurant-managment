import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { TipoUsuario } from './tipo_usuario.entity';
import { TipoUsuarioService } from './tipo_usuario.service';

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
