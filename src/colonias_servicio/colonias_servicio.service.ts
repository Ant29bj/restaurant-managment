import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { ColoniasDeServicio } from './colonias_service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ColoniasServicioService extends GenericService<ColoniasDeServicio> {
    constructor(
        @InjectRepository(ColoniasDeServicio)
        private readonly coloniasDServicioRepository: Repository<ColoniasDeServicio>,
    ) {
        super(coloniasDServicioRepository);
    }
}
