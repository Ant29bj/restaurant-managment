import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidades } from './unidades.entity';

@Injectable()
export class UnidadesService extends GenericService<Unidades> {
  constructor(
    @InjectRepository(Unidades)
    private readonly unidadesRepository: Repository<Unidades>,
  ) {
    super(unidadesRepository);
  }
}
