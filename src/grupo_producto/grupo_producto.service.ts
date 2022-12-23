import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { GrupoProducto } from './grupo_producto.entity';

@Injectable()
export class GrupoProductoService extends GenericService<GrupoProducto> {
  constructor(
    @InjectRepository(GrupoProducto)
    private readonly GrupoRepository: Repository<GrupoProducto>,
  ) {
    super(GrupoRepository);
  }
}
