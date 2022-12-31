import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Funcionalidades } from './funcionalidades.entity';
@Injectable()
export class FuncionalidadesService extends GenericService<Funcionalidades> {
  constructor(
    @InjectRepository(Funcionalidades)
    private readonly funcionalidadesRepository: Repository<Funcionalidades>,
  ) {
    super(funcionalidadesRepository);
  }
}
