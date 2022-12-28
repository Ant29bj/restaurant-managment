import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'comedor' })
export class Comedor extends GenericEntity {
  @Column({ type: 'smallint' })
  id_comedor: number;

  @Column({ type: 'smallint' })
  num_mesa: number;

  @Column({ type: 'smallint' })
  id_area: number;

  @Column({ type: 'bigint' })
  id_usuarios: number;
}
