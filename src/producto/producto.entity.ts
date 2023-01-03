import { CategoriaProductos } from 'src/categoria_productos/categoria_productos.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Image } from 'src/images/images.entity';
import { Proveedores } from 'src/proveedores/proveedores.entity';
import { Sucursales } from 'src/sucursales/sucursales.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'productos' })
export class Productos extends GenericEntity {
  @ManyToOne((type) => Sucursales, (sucursales) => sucursales.id, {})
  @JoinColumn([
    { name: 'id_empresa', referencedColumnName: 'id_empresa' },
    { name: 'id_sucursal', referencedColumnName: 'id' },
  ])
  sucursales: Sucursales;
  @Column()
  id_sucursal: number;

  @ManyToOne((type) => CategoriaProductos, (categorias) => categorias.id, {})
  @JoinColumn({ name: 'id_categoria', referencedColumnName: 'id' })
  categorias: CategoriaProductos;
  @Column()
  id_categoria: number;

  @ManyToOne((type) => Proveedores, (proveedores) => proveedores.id, {})
  @JoinColumn({ name: 'id_proveedor', referencedColumnName: 'id' })
  proveedores: Proveedores;
  @Column()
  id_proveedor: number;

  @Column({ type: 'bigint' }) // falta relacionar entitdad empresa
  id_empresa: number;

  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: 'money' })
  precio_prod: number;

  @Column({ type: 'smallint' })
  stock: number;

  @Column({ type: 'smallint' })
  stock_minimo: number;

  @Column({ length: 1, default: 0 })
  vendersin_stock: string;

  @Column({ length: 1, default: 1 })
  inventariable: string;

  @Column({ length: 1, default: 1 })
  estatus: string;

  @OneToMany(() => Image, (image) => image.id)
  image: number;
}
