import { GenericEntity } from "src/generics/generic.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: "tipo_pagos" })
export class TipoPagos extends GenericEntity {
  @OneToMany(() => TipoPagos, (tiPagos) => tiPagos)
  tipo_pagos: TipoPagos[];

  @Column({ length: 100 })
  descripcion: string;
}
