import { DiasHabiles } from "src/dias_habiles/dias_habiles.entity";
import { Estados } from "src/estados/estados.entity";
import { GenericEntity } from "src/generics/generic.entity";
import { Localidades } from "src/localidades/localidades.entity";
import { Municipios } from "src/municipio/municipios.entity";
import { TipoPagos } from "src/tipo_pagos/tipo_pagos.entity";
import { Ubicacion } from "src/ubicacion/ubicacion.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";

@Entity({ name: "sucursales" })
export class Sucursales extends GenericEntity {
  @OneToMany(() => Sucursales, (sucursales) => sucursales.id)
  sucursal: Sucursales[];

  @OneToOne(() => Ubicacion, (ubicacion) => ubicacion.cp)
  @JoinColumn([
    { name: "id_ubicacion", referencedColumnName: "id" },
    { name: "codigo_pos", referencedColumnName: "cp" },
  ])
  ubicacion: Ubicacion;
  @Column({ length: 6 })
  codigo_pos: string;

  @PrimaryColumn()
  id_empresa: number;

  @Column()
  nombre_sucursal: string;

  @ManyToOne(() => TipoPagos, (tipo_pago) => tipo_pago.id)
  @JoinColumn({ name: "tipo_pago", referencedColumnName: "id" })
  pagos: TipoPagos;
  @Column()
  tipos_pagos: number;

  @ManyToOne(() => DiasHabiles, (dias_habiles) => dias_habiles.id)
  @JoinColumn({ name: "id_dia", referencedColumnName: "id" })
  dias_habiles: DiasHabiles;
  @Column()
  id_dia: number;

  @Column()
  direccion: string;
  @Column()
  telefono: string;
  @Column()
  telefono_what: string;
  @Column()
  email: string;
  @Column({ default: 1 })
  estatus: number;

  @Column()
  hora_apertura: Date;
  @Column()
  hora_cierre: Date;
}
