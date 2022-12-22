import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComandaCombo } from './comanda_combo.entity';

@Injectable()
export class ComandaCombosService extends GenericService<ComandaCombo> {
  constructor(
    @InjectRepository(ComandaCombo)
    private readonly comandaCombosRepository: Repository<ComandaCombo>,
  ) {
    super(comandaCombosRepository);
  }
}
