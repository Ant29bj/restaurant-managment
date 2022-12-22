import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Productos } from './producto.entity';

export class ProductosService extends GenericService<Productos> {
  constructor(
    @InjectRepository(Productos) private productos: Repository<Productos>,
  ) {
    super(productos);
  }
}
