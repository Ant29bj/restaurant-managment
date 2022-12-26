import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'comanda_productos' })
export class ComandaProductos extends GenericEntity {
  @Column({ type: 'bigint' })
  id_producto: number;

  @Column({ type: 'bigint' })
  id_comanda: number;

  @Column({ type: 'smallint' })
  cantidad: number;

  @Column({ length: 100 })
  observaciones: string;

  @Column({ type: 'smallint' })
  id_insumos: number;
}
