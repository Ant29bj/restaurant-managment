import { GenericEntity } from "src/generics/generic.entity";
import { Productos } from "src/producto/producto.entity";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
@Entity("recetas")
export class Recetas extends GenericEntity {
  @ManyToOne((type) => Productos, (producto) => producto.id, {})
  @JoinColumn({ name: "id_producto", referencedColumnName: "id" })
  producto: Productos;
  @Column()
  id_producto: number;

  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: "decimal", precision: 5 })
  total_receta: number;

  @ManyToMany(() => Productos)
  @JoinTable()
  productos: Productos[];
}
