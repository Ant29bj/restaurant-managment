import { GenericEntity } from 'src/generics/generic.entity';
import { Image } from 'src/images/images.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'productos' })
export class Productos extends GenericEntity {
  @Column({ type: 'bigint' }) // falta relacionar entitdad empresa
  id_empresa: number;

  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: 'money' })
  precio_prod: number;

  @Column({ type: 'smallint' }) // Falta tabla categoria hay que relacionar
  id_categoria: number;

  @Column({ type: 'smallint' })
  stock: number;

  @Column({ type: 'smallint' })
  stock_minimo: number;

  @Column({ length: 1, default: 0 })
  vendersin_stock: string;

  @Column({ length: 1, default: 1 })
  inventariable: string;

  @Column({ type: 'bigint' }) // Falta tabla proveedores hay que relacionar
  id_proveedor: number;

  @Column({ length: 1, default: 1 })
  estatus: string;

  @Column({ type: 'bigint' }) // Falta relacionar no esta la tabla
  id_sucursal: number;

  @OneToMany(() => Image, (image) => image.id)
  image: number;
}
