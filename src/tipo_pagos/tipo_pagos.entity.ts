import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tipo_pagos' })
export class TipoPagos extends GenericEntity {
  @Column({ length: 100 })
  descripcion: string;
}
