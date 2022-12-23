import { GenericService } from 'src/generics/generic.service';
import { TipoUsuario } from './tipo_usuario.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoUsuarioService extends GenericService<TipoUsuario> {
  constructor(
    @InjectRepository(TipoUsuario)
    private readonly tipoUsuarioRepo: Repository<TipoUsuario>,
  ) {
    super(tipoUsuarioRepo);
  }
}
