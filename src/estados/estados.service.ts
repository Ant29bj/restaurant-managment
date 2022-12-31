import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Estados } from './estados.entity';
@Injectable()
export class EstadosService extends GenericService<Estados> {
  constructor(
    @InjectRepository(Estados)
    private readonly estadosRepository: Repository<Estados>,
  ) {
    super(estadosRepository);
  }
}
