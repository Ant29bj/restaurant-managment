import { Comanda } from 'src/comanda/comanda.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Insumos } from 'src/insumos/insumos.entity';
import { Productos } from 'src/producto/producto.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'comanda_productos' })
export class ComandaProductos extends GenericEntity {
  @ManyToOne(() => Productos, (producto) => producto.id, {})
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  producto: Productos;
  @Column({ type: 'bigint' })
  id_producto: number;

  @ManyToOne(() => Comanda, (producto) => producto.id, {})
  @JoinColumn({ name: 'id_comanda', referencedColumnName: 'id' })
  comanda: Comanda;
  @Column({ type: 'bigint' })
  id_comanda: number;

  @Column({ type: 'smallint' })
  cantidad: number;

  @Column({ length: 100 })
  observaciones: string;

  @ManyToOne(() => Insumos, (insumos) => insumos.id, {})
  @JoinColumn({ name: 'id_insumos', referencedColumnName: 'id' })
  insumos: Insumos;
  @Column({ type: 'smallint' })
  id_insumos: number;
}
