import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recetas } from './recetas.entity';

@Injectable()
export class RecetasService extends GenericService<Recetas> {
  constructor(
    @InjectRepository(Recetas)
    private readonly recetasRepository: Repository<Recetas>,
  ) {
    super(recetasRepository);
  }
}
