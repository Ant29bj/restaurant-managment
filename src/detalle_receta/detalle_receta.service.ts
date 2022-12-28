import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { DetalleReceta } from './detalle_receta.entity';

@Injectable()
export class DetalleRecetaService extends GenericService<DetalleReceta> {
  constructor(
    @InjectRepository(DetalleReceta)
    private readonly detalleRecetaRepository: Repository<DetalleReceta>,
  ) {
    super(detalleRecetaRepository);
  }
}
