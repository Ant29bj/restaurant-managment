import { GenericEntity } from "src/generics/generic.entity";
import { Sucursales } from "src/sucursales/sucursales.entity";
import { Column, Entity, ManyToMany } from "typeorm";

@Entity({ name: "tipo_pagos" })
export class TipoPagos extends GenericEntity {
  @Column({ length: 100 })
  descripcion: string;

  @ManyToMany(() => Sucursales, (sucursales) => sucursales.tipos_pagos)
  sucursales: Sucursales[];
}
