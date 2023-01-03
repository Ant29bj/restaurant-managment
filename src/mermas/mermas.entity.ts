import { GenericEntity } from 'src/generics/generic.entity';
import { Productos } from 'src/producto/producto.entity';
import { TipoMermas } from 'src/tipo_mermas/tipo_mermas.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
@Entity('mermas')
export class Mermas extends GenericEntity {
  @ManyToOne(() => Productos, (productos) => productos.id, {})
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  prodcuto: Productos;
  @Column()
  id_producto: number;

  @ManyToOne(() => TipoMermas, (tmermas) => tmermas.id, {})
  @JoinColumn({ name: 'id_tipmerma', referencedColumnName: 'id' })
  tmermas: TipoMermas;
  @Column()
  id_tipmerma: number;

  @Column()
  descripcion: string;

  @Column()
  cantidad_merma: number;
}
