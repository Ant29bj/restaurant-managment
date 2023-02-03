import { GenericEntity } from "src/generics/generic.entity";
import { Sucursales } from "src/sucursales/sucursales.entity";
import { Column, Entity, ManyToMany } from "typeorm";

enum diasHabiles {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sabado",
  Domingo = "Domingo",
}
@Entity({ name: "dias_habiles" })
export class DiasHabiles extends GenericEntity {
  @Column({ type: "smallint" })
  id_dia: number;

  @Column({
    type: "enum",
    enum: diasHabiles,
  })
  name: diasHabiles;

  @ManyToMany(() => Sucursales, (sucursales) => sucursales.dias_habiles)
  sucursales: Sucursales[];

  @Column({ length: 50 })
  descripcion: string;

  @Column({ length: 1 })
  estatus: string;

  @Column({ length: 20 })
  hora_inicio: string;

  @Column({ length: 20 })
  hora_cierre: string;
}
