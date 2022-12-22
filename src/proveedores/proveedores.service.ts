import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedores } from './proveedores.entity';

@Injectable()
export class ProveedoresService extends GenericService<Proveedores> {
  constructor(
    @InjectRepository(Proveedores)
    private readonly empresaRepository: Repository<Proveedores>,
  ) {
    super(empresaRepository);
  }
}
