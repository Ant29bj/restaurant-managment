import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { ComboDetalle } from './combo_detalle.entity';

export class ComboDetalleService extends GenericService<ComboDetalle> {
  constructor(
    @InjectRepository(ComboDetalle)
    private readonly comboDetalle: Repository<ComboDetalle>,
  ) {
    super(comboDetalle);
  }
}