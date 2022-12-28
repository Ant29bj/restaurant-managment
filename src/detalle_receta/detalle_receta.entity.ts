import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'detalle_receta' })
export class DetalleReceta extends GenericEntity {
  @Column({ type: 'smallint' })
  id_receta: number;

  @Column({ type: 'smallint' })
  id_insumos: number;

  @Column({ type: 'bigint' })
  id_producto: number;

  @Column({ type: 'smallint' })
  cantidad_producto: number;

  @Column({ type: 'smallint' })
  id_unidad: number;

  @Column({ type: 'money' })
  costo: number;

  @Column({ type: 'smallint' })
  id_merma: number;
}
