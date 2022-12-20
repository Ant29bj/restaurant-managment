import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidades } from './unidades.entity';
import { EquivalenciasMedidasService } from '../equivalencias_medidas/equivalencias_medidas.service';
import { UnidadesCreateDto } from './dto/unidades.dto';

@Injectable()
export class UnidadesService extends GenericService<Unidades> {
  constructor(
    @InjectRepository(Unidades)
    private readonly unidadesRepository: Repository<Unidades>,

    private EquivalenciasMedidasService: EquivalenciasMedidasService,
  ) {
    super(unidadesRepository);
  }

  async createUnidad(entity: UnidadesCreateDto) {
    const equivFound = await this.EquivalenciasMedidasService.getEquiv(
      entity.unidadId,
    );

    if (!equivFound) {
      return new HttpException(
        'Equivalencia no encontrada',
        HttpStatus.NOT_FOUND,
      );
    }

    const newUnidad = this.unidadesRepository.create(entity);
    return this.unidadesRepository.save(newUnidad);
  }

  getUnidades() {
    return this.unidadesRepository.find({
      relations: ['unidad'],
    });
  }
}
