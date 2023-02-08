import { GenericEntity } from "src/generics/generic.entity";
import { Productos } from "src/producto/producto.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity("grupo_producto")
export class GrupoProducto extends GenericEntity {
  @Column({ length: 100, unique: true })
  descripcion: string;

  @OneToMany(() => Productos, (productos) => productos.grupo)
  productos: Productos[];
}
