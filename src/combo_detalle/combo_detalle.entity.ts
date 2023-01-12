import { Combos } from 'src/combos/combos.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Productos } from 'src/producto/producto.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'detalle_combos' })
export class ComboDetalle extends GenericEntity {
  @ManyToOne(() => Combos, (combos) => combos.id)
  id_combo: number;

  @ManyToOne(() => Productos, (producto) => producto.id, {})
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  producto: Productos;
  @Column({ type: 'bigint' }) // Falta relacionar con productos
  id_producto: number;

  @Column({ type: 'smallint' })
  cantidat: number;
}
