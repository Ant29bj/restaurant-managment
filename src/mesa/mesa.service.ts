import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesas } from './mesa.entity';

@Injectable()
export class MesasService extends GenericService<Mesas> {
  constructor(
    @InjectRepository(Mesas)
    private readonly mesasRepository: Repository<Mesas>,
  ) {
    super(mesasRepository);
  }
}
