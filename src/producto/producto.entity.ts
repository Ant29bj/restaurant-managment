import { CategoriaProductos } from "src/categoria_productos/categoria_productos.entity";
import { GenericEntity } from "src/generics/generic.entity";
import { GrupoProducto } from "src/grupo_producto/grupo_producto.entity";
import { Image } from "src/images/images.entity";
import { Proveedores } from "src/proveedores/proveedores.entity";
import { Recetas } from "src/recetas/recetas.entity";
import { Sucursales } from "src/sucursales/sucursales.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity({ name: "productos" })
export class Productos extends GenericEntity {
  @ManyToOne((type) => Sucursales, (sucursales) => sucursales.id, {})
  @JoinColumn([{ name: "id_sucursal", referencedColumnName: "id" }])
  sucursales: Sucursales;
  @Column()
  id_sucursal: number;

  @ManyToOne((type) => CategoriaProductos, (categorias) => categorias.id, {})
  @JoinColumn({ name: "id_categoria", referencedColumnName: "id" })
  categorias: CategoriaProductos;
  @Column()
  id_categoria: number;

  @ManyToOne((type) => Proveedores, (proveedores) => proveedores.id, {})
  @JoinColumn({ name: "id_proveedor", referencedColumnName: "id" })
  proveedores: Proveedores;
  @Column()
  id_proveedor: number;

  @ManyToMany(() => Recetas, (recetas) => recetas.productos)
  recetas: Recetas[];

  @ManyToOne(() => GrupoProducto, (gpo_producto) => gpo_producto.id)
  grupo: GrupoProducto;

  @Column({ type: "bigint" }) // falta relacionar entitdad empresa
  id_empresa: number;

  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: "money" })
  precio_prod: number;

  @Column({ type: "smallint" })
  stock: number;

  @Column({ type: "smallint" })
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
