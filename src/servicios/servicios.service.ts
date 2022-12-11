import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Servicios } from './servicios.entity';

@Injectable()
export class ServiciosService extends GenericService<Servicios> {
  constructor(
    @InjectRepository(Servicios)
    private readonly ServiciosRepository: Repository<Servicios>,
  ) {
    super(ServiciosRepository);
  }
}
