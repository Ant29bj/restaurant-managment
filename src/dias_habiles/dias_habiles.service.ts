import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { DiasHabiles } from './dias_habiles.entity';
@Injectable()
export class DiasHabilesService extends GenericService<DiasHabiles> {
  constructor(
    @InjectRepository(DiasHabiles)
    private readonly DiasHabilesRepository: Repository<DiasHabiles>,
  ) {
    super(DiasHabilesRepository);
  }
}
