import { AreaRestaurante } from "src/area_restaurante/area_restaurante.entity";
import { ColoniasDeServicio } from "src/colonias_servicio/colonias_service.entity";
import { ColoniasServicioModule } from "src/colonias_servicio/colonias_servicio.module";
import { DiasHabiles } from "src/dias_habiles/dias_habiles.entity";
import { Empresas } from "src/empresas/empresas.entity";
import { GenericEntity } from "src/generics/generic.entity";
import { Reservaciones } from "src/reservaciones/reservaciones.entity";
import { TipoPagos } from "src/tipo_pagos/tipo_pagos.entity";
import { Ubicacion } from "src/ubicacion/ubicacion.entity";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity({ name: "sucursales" })
export class Sucursales extends GenericEntity {
  @OneToMany(() => Sucursales, (sucursales) => sucursales.id)
  sucursal: Sucursales[];

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.cp)
  @JoinColumn([
    { name: "id_ubicacion", referencedColumnName: "id" },
    { name: "codigo_pos", referencedColumnName: "cp" },
  ])
  ubicacion: Ubicacion;
  @Column({ length: 6 })
  codigo_pos: string;

  @ManyToOne(() => Empresas, (empresas) => empresas.sucursales)
  @JoinColumn({ name: "id_empresa", referencedColumnName: "id" })
  id_empresa: Empresas;

  @Column()
  nombre_sucursal: string;

  @ManyToMany(() => TipoPagos, (tipo_pago) => tipo_pago.id)
  @JoinTable()
  @JoinColumn({ name: "tipo_pago", referencedColumnName: "id" })
  tipos_pagos: TipoPagos[];

  @ManyToMany(() => DiasHabiles, (dias_habiles) => dias_habiles.sucursales, {
    cascade: true,
  })
  @JoinTable()
  dias_habiles: DiasHabiles[];

  @OneToMany(
    () => AreaRestaurante,
    (area_restaurante) => area_restaurante.sucursal
  )
  areas: AreaRestaurante[];

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

  @OneToMany(() => Reservaciones, (reservaciones) => reservaciones.sucursal)
  reservaciones: Reservaciones[];

  @Column()
  area_servicio: string;

  @ManyToMany(() => ColoniasDeServicio, (col_servi) => col_servi.sucursales)
  colonias_servicio: ColoniasDeServicio[];
}
