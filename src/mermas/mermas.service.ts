import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mermas } from './mermas.entity';

@Injectable()
export class MermasService extends GenericService<Mermas> {
  constructor(
    @InjectRepository(Mermas)
    private readonly mermasRepository: Repository<Mermas>,
  ) {
    super(mermasRepository);
  }
}
