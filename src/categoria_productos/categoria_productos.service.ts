import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { CategoriaProductos } from './categoria_productos.entity';

@Injectable()
export class CategoriaProductosService extends GenericService<CategoriaProductos> {
  constructor(
    @InjectRepository(CategoriaProductos)
    private readonly categoriaProductosRepository: Repository<CategoriaProductos>,
  ) {
    super(categoriaProductosRepository);
  }
}
