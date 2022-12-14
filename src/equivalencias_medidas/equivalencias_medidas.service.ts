import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquivalenciasMedidas } from './equivalencias_medidas.entity';

@Injectable()
export class EquivalenciasMedidasService extends GenericService<EquivalenciasMedidas> {
  constructor(
    @InjectRepository(EquivalenciasMedidas)
    private readonly equivalenciasMedidasRepository: Repository<EquivalenciasMedidas>,
  ) {
    super(equivalenciasMedidasRepository);
  }
}
