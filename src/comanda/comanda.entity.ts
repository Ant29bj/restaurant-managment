import { GenericEntity } from 'src/generics/generic.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'comanda' })
export class Comanda extends GenericEntity {
  @Column({ type: 'bigint' })
  id_comanda: number;

  @Column({ type: 'bigint' })
  id_sucursal: number;

  @Column({ type: 'bigint' })
  id_empresa: number;

  @Column({ type: 'bigint' })
  id_usuarios: number;

  @Column({ type: 'bigint' })
  id_pago: number;

  @Column({ type: 'bigint' })
  id_mesa: number;

  @Column({ type: 'smallint' })
  consumo: number;

  @Column({ length: 25 })
  fecha_comanda: string;

  @Column({ length: 1 })
  estatus: string;
}
