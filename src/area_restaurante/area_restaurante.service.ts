import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { AreaRestaurante } from './area_restaurante.entity';

export class AreaRestauranteService extends GenericService<AreaRestaurante> {
  constructor(
    @InjectRepository(AreaRestaurante)
    private areaRestauranteRepo: Repository<AreaRestaurante>,
  ) {
    super(areaRestauranteRepo);
  }
}
