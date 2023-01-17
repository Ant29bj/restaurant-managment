import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Ubicacion } from './ubicacion.entity';

@Injectable()
export class UbicacionService extends GenericService<Ubicacion> {
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepo: Repository<Ubicacion>,
  ) {
    super(ubicacionRepo);
  }
}
