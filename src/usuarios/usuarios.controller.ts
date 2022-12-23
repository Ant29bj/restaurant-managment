import { GenericController } from 'src/generics/generic.controller';
import { Usuarios } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';
import { Controller } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController extends GenericController<
  Usuarios,
  UsuariosService
> {
  constructor(private readonly usuariosService: UsuariosService) {
    super(usuariosService);
  }
}
