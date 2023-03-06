import { GenericController } from 'src/generics/generic.controller';
import { Usuarios } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';
import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
@UseGuards(JwtAuthGuard)

@Controller('usuarios')
export class UsuariosController extends GenericController<
  Usuarios,
  UsuariosService
> {
  constructor(private readonly usuariosService: UsuariosService) {
    super(usuariosService);
  }
}
