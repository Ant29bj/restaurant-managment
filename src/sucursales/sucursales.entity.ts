import { Estados } from 'src/estados/estados.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Localidades } from 'src/localidades/localidades.entity';
import { Municipios } from 'src/municipio/municipios.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'sucursales' })
export class Sucursales extends GenericEntity {
  @OneToMany(() => Sucursales, (sucursales) => sucursales.id)
  sucursal: Sucursales[];

  @ManyToOne((type) => Estados, (estados) => estados.id, {})
  @JoinColumn({ name: 'ID_Estado', referencedColumnName: 'id' })
  estados: Estados;
  @Column()
  ID_Estado: number;
  // Fk compuestas entendidas
  @ManyToOne(() => Municipios, {})
  @JoinColumn([
    { name: 'ID_Estado', referencedColumnName: 'estado_id' },
    { name: 'ID_Municipio', referencedColumnName: 'clave' },
  ])
  municipios: Municipios;
  @Column()
  ID_Municipio: number;

  @ManyToOne(() => Localidades, { eager: true })
  @JoinColumn([
    { name: 'ID_Estado', referencedColumnName: 'cve_ent' },
    { name: 'ID_Municipio', referencedColumnName: 'cve_mun' },
    { name: 'ID_Localidad', referencedColumnName: 'cve_loc' },
  ])
  localidades: Localidades;
  @Column()
  ID_Localidad: number;

  @PrimaryColumn()
  id_empresa: number;

  @Column()
  nombre_sucursal: string;
  @Column()
  tipos_pagos: number;
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
