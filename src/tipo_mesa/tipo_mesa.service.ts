import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { TipoMesa } from './tipo_mesa.entity';

@Injectable()
export class TipoMesaService extends GenericService<TipoMesa> {
  constructor(
    @InjectRepository(TipoMesa)
    private readonly tipoMesaRepo: Repository<TipoMesa>,
  ) {
    super(tipoMesaRepo);
  }
}
