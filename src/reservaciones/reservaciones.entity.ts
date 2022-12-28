import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'reservaciones' })
export class Reservaciones extends GenericEntity {
  @Column({ type: 'smallint' })
  id_reservacion: number;

  @Column({ type: 'bigint' })
  id_cliente: number;

  @Column({ length: 100 })
  nombre_cliente: string;

  @Column({ type: 'smallint' })
  id_mesa: number;
}
