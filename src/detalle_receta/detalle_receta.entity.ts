import { GenericEntity } from 'src/generics/generic.entity';
import { Insumos } from 'src/insumos/insumos.entity';
import { Productos } from 'src/producto/producto.entity';
import { Recetas } from 'src/recetas/recetas.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'detalle_receta' })
export class DetalleReceta extends GenericEntity {
  @ManyToOne((type) => Recetas, (recetas) => recetas.id, {})
  @JoinColumn({ name: 'id_recetas', referencedColumnName: 'id' })
  recetas: Recetas;
  @Column()
  id_receta: number;

  @ManyToOne((type) => Insumos, (insumos) => insumos.id, {})
  @JoinColumn({ name: 'id_insumos', referencedColumnName: 'id' })
  insumos: Insumos;
  @Column()
  id_insumos: number;

  @ManyToOne((type) => Productos, (productos) => productos.id, {})
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  producto: Productos;
  @Column()
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
