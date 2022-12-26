import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Comedor } from './comedor.entity';

@Injectable()
export class ComedorService extends GenericService<Comedor> {
  constructor(
    @InjectRepository(Comedor)
    private readonly comedorRepository: Repository<Comedor>,
  ) {
    super(comedorRepository);
  }
}
