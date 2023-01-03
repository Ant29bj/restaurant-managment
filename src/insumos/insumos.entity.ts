import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'insumos' })
export class Insumos extends GenericEntity {
  @Column({ type: 'smallint' })
  stock: number;

  @Column({ type: 'smallint' })
  stock_minimo: number;

  @Column({ type: 'smallint' })
  id_equivalencia: number;

  @Column({ length: 1 })
  estatus: string;
}
