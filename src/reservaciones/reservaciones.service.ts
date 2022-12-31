import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Reservaciones } from './reservaciones.entity';
@Injectable()
export class ReservacionesService extends GenericService<Reservaciones> {
  constructor(
    @InjectRepository(Reservaciones)
    private readonly reservacionesRepository: Repository<Reservaciones>,
  ) {
    super(reservacionesRepository);
  }
}
