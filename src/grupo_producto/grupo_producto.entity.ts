import { GenericEntity } from "src/generics/generic.entity";
import { Column, Entity } from "typeorm";

@Entity("grupo_producto")
export class GrupoProducto extends GenericEntity {
  @Column({ length: 100, unique: true })
  descripcion: string;
}
