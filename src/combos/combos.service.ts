import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Combos } from './combos.entity';

@Injectable()
export class CombosService extends GenericService<Combos> {
  constructor(
    @InjectRepository(Combos) private combosRespository: Repository<Combos>,
  ) {
    super(combosRespository);
  }
}
