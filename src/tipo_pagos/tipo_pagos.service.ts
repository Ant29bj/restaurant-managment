import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { TipoPagos } from './tipo_pagos.entity';

@Injectable()
export class TipoPagosService extends GenericService<TipoPagos> {
  constructor(
    @InjectRepository(TipoPagos)
    private readonly TipoPagosRepository: Repository<TipoPagos>,
  ) {
    super(TipoPagosRepository);
  }
}
