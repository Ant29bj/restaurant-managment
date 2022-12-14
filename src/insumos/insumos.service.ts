import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Insumos } from './insumos.entity';
@Injectable()
export class InsumosService extends GenericService<Insumos> {
    constructor(
        @InjectRepository(Insumos)
        private readonly InsumosRepository: Repository<Insumos>,
    ) {
        super(InsumosRepository);
    }
}
