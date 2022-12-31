import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Productos } from './producto.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class ProductosService extends GenericService<Productos> {
  constructor(
    @InjectRepository(Productos) private productos: Repository<Productos>,
  ) {
    super(productos);
  }
}
