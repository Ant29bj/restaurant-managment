import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoMermas } from './tipo_mermas.entity';

@Injectable()
export class TipoMermasService extends GenericService<TipoMermas> {
  constructor(
    @InjectRepository(TipoMermas)
    private readonly tipoMermasRepository: Repository<TipoMermas>,
  ) {
    super(tipoMermasRepository);
  }
}
