import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { ComandaProductos } from './comanda_productos.entity';

@Injectable()
export class ComandaProductosService extends GenericService<ComandaProductos> {
  constructor(
    @InjectRepository(ComandaProductos)
    private readonly comandaProductosRepository: Repository<ComandaProductos>,
  ) {
    super(comandaProductosRepository);
  }
}
