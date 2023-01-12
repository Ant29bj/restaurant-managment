import { GenericEntity } from 'src/generics/generic.entity';
import { Insumos } from 'src/insumos/insumos.entity';
import { Mermas } from 'src/mermas/mermas.entity';
import { Productos } from 'src/producto/producto.entity';
import { Recetas } from 'src/recetas/recetas.entity';
import { Unidades } from 'src/unidades/unidades.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'detalle_receta' })
export class DetalleReceta extends GenericEntity {
  @ManyToOne((type) => Recetas, (recetas) => recetas.id, {})
  @JoinColumn({ name: 'id_receta', referencedColumnName: 'id' })
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

  @ManyToOne(() => Unidades, (unidades) => unidades.id)
  @JoinColumn({ name: 'id_unidad', referencedColumnName: 'id' })
  unidades: Unidades;
  @Column({ type: 'smallint' })
  id_unidad: number;

  @Column({ type: 'money' })
  costo: number;

  @ManyToOne(() => Mermas, (mermas) => mermas.id)
  @JoinColumn({ name: 'id_merma', referencedColumnName: 'id' })
  mermas: Mermas;
  @Column({ type: 'smallint' })
  id_merma: number;
}
