import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Sucursales } from './sucursales.entity';
@Injectable()
export class SucursalesService extends GenericService<Sucursales> {
  constructor(
    @InjectRepository(Sucursales)
    private readonly sucursalesRepository: Repository<Sucursales>,
  ) {
    super(sucursalesRepository);
  }
}
