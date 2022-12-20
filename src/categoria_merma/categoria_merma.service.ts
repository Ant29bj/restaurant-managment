import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaMerma } from './categoria_merma.entity';
@Injectable()
export class CategoriaMermaService extends GenericService<CategoriaMerma> {
    constructor(
        @InjectRepository(CategoriaMerma)
        private readonly categoriaMermaRepository: Repository<CategoriaMerma>,
    ) {
        super(categoriaMermaRepository);
    }
}
