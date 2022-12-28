import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comanda } from './comanda.entity';

@Injectable()
export class ComandaService extends GenericService<Comanda> {
  constructor(
    @InjectRepository(Comanda)
    private readonly comandaRepository: Repository<Comanda>,
  ) {
    super(comandaRepository);
  }
}
