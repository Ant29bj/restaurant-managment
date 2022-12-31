import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { ComandaServicios } from './comanda_servicios.entity';

@Injectable()
export class ComandaServiciosService extends GenericService<ComandaServicios> {
  constructor(
    @InjectRepository(ComandaServicios)
    private readonly comandaServiciosRepository: Repository<ComandaServicios>,
  ) {
    super(comandaServiciosRepository);
  }
}
