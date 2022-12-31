import { Combos } from 'src/combos/combos.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Productos } from 'src/producto/producto.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('comanda_combo')
export class ComandaCombo extends GenericEntity {
  // Falta la tabla comanda : por relacionar
  @Column({ type: 'bigint' })
  id_comanda: number;

  @ManyToOne(() => Combos, (combos) => combos.id)
  @JoinColumn({ name: 'id_combo', referencedColumnName: 'id' })
  Combo: Combos;
  @Column({ type: 'smallint' })
  id_combo: number;

  @ManyToOne(() => Productos, (producto) => producto.id)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  Producto: Productos;
  @Column({ type: 'bigint' })
  id_producto: number;

  @Column({ type: 'smallint' })
  cantidad: number;

  @Column({ length: 100 })
  observaciones: string;

  // Falta la tabla insumo : por relacionar
  @Column({ type: 'smallint' })
  id_insumo: number;
}
