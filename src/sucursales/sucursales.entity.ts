import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sucursales' })
export class Sucursales extends GenericEntity {
  @Column({ type: 'bigint' })
  id_empresa: number;

  @Column({ type: 'bigint' })
  id_sucursal: number;

  @Column({ length: 100 })
  nombre_sucursal: string;

  @Column({ type: 'smallint' })
  id_estado: number;

  @Column({ type: 'smallint' })
  id_municipio: number;

  @Column({ type: 'smallint' })
  id_localidad: number;

  @Column({ length: 100 })
  direccion: string;

  @Column({ type: 'smallint' })
  codigo_postal: number;

  @Column({ length: 11 })
  telefono: string;

  @Column({ length: 13, nullable: true })
  telefono_what: string;

  @Column({ length: 250 })
  email: string;

  @Column({ type: 'smallint' })
  id_pago: number;

  @Column({ length: 1 })
  estatus: string;

  @Column({ type: 'smallint' })
  id_dia: number;
}
