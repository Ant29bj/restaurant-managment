import { GenericService } from 'src/generics/generic.service';
import { Reportes } from './reportes.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReportesService extends GenericService<Reportes> {
  constructor(
    @InjectRepository(Reportes)
    private readonly reportesRepository: Repository<Reportes>,
  ) {
    super(reportesRepository);
  }
}
