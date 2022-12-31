import { GenericEntity } from 'src/generics/generic.entity';
import { Entity, Column } from 'typeorm';

@Entity('agrupacion')
export class Agrupacion extends GenericEntity {
  // Por relacionar
  @Column()
  id_combo: number;

  // Por relacionar
  @Column()
  id_producto: number;

  @Column({ nullable: true })
  cantidad: number;
}
