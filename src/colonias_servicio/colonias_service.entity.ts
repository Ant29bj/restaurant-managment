import { GenericEntity } from "src/generics/generic.entity";
import { Sucursales } from "src/sucursales/sucursales.entity";
import { Ubicacion } from "src/ubicacion/ubicacion.entity";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";

@Entity("col_servicio")
export class ColoniasDeServicio extends GenericEntity {
  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.cp)
  @JoinColumn([
    { name: "id_ubicacion", referencedColumnName: "id" },
    { name: "codigo_pos", referencedColumnName: "cp" },
  ])
  ubicacion: Ubicacion;

  @Column({ length: 255 })
  descripcion: string;

  @ManyToMany(() => Sucursales, (sucursales) => sucursales.area_servicio)
  @JoinTable({
    name: "area_servicio",
    joinColumn: {
      name: "sucursal_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "colonia_id",
      referencedColumnName: "id",
    },
  })
  sucursales: Sucursales[];
}
