import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Agrupacion } from './agrupacion.entity';

@Injectable()
export class AgrupacionService extends GenericService<Agrupacion> {
  constructor(
    @InjectRepository(Agrupacion)
    private readonly agrupacionRepo: Repository<Agrupacion>,
  ) {
    super(agrupacionRepo);
  }
}
