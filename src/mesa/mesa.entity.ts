import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('mesas')
export class Mesas extends GenericEntity {
  // Falta relacionar
  @Column({ type: 'smallint' })
  id_area: number;
  // Falta relacionar
  @Column({ type: 'smallint' })
  id_tipo_mesa: number;

  @Column({ type: 'smallint' })
  capacidad_mesa: number;
}
