import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { RolDeFuncionalidades } from './rol_de_funcionalidades.entity';
@Injectable()
export class RolDeFuncionalidadesService extends GenericService<RolDeFuncionalidades> {
  constructor(
    @InjectRepository(RolDeFuncionalidades)
    private readonly RolDeFuncionalidadesRepository: Repository<RolDeFuncionalidades>,
  ) {
    super(RolDeFuncionalidadesRepository);
  }
}
