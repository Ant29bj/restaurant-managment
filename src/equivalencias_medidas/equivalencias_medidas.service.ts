import { GenericService } from 'src/generics/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquivalenciasMedidas } from './equivalencias_medidas.entity';
import { Unidades } from 'src/unidades/unidades.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

export class EquivalenciasMedidasService extends GenericService<EquivalenciasMedidas> {
  constructor(
    @InjectRepository(EquivalenciasMedidas)
    private readonly equivalenciasMedidasRepository: Repository<EquivalenciasMedidas>,
  ) {
    super(equivalenciasMedidasRepository);
  }

  getEquivs() {
    return this.equivalenciasMedidasRepository.find();
  }

  async getEquiv(id: number) {
    const equivFound = await this.equivalenciasMedidasRepository.findOne({
      where: { id },
      relations: ['unidades'],
    });

    if (!equivFound) {
      return new HttpException(
        'Equivalencia no encontrada',
        HttpStatus.NOT_FOUND,
      );
    }

    return equivFound;
  }

  // async createUnidad(id: number, entity: UnidadesCreateDto) {
  //   const equivFound = await this.equivalenciasMedidasRepository.findOne({
  //     where: { id },
  //   });

  //   if (!equivFound) {
  //     return new HttpException('Unidad no encontrada', HttpStatus.NOT_FOUND);
  //   }

  //   const newUnidad = this.unidadRepository.create(entity);
  //   const savedUnidad = await this.unidadRepository.save(newUnidad);

  //   equivFound.unidades = savedUnidad;

  //   return this.equivalenciasMedidasRepository.save(equivFound);
  // }
}
