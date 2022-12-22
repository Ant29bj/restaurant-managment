import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Empresas } from './empresas.entity';

export class EmpresasService extends GenericService<Empresas> {
  constructor(
    @InjectRepository(Empresas) private readonly empresa: Repository<Empresas>,
  ) {
    super(empresa);
  }
}
