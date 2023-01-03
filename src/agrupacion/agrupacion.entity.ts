import { Combos } from 'src/combos/combos.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Productos } from 'src/producto/producto.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('agrupacion')
export class Agrupacion extends GenericEntity {
  @ManyToOne(() => Combos, (combos) => combos.id, {})
  @JoinColumn({ name: 'id_combo', referencedColumnName: 'id' })
  combos: Combos;
  @Column()
  id_combo: number;

  @ManyToOne(() => Productos, (Productos) => Productos.id, {})
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  Producto: Productos;
  @Column()
  id_producto: number;

  @Column({ nullable: true })
  cantidad: number;
}
