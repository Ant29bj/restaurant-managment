import { GenericEntity } from "src/generics/generic.entity";
import { Ubicacion } from "src/ubicacion/ubicacion.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity("proveedores")
export class Proveedores extends GenericEntity {
  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido_pat: string;

  @Column({ length: 100 })
  apellido_mat: string;

  @Column({ length: 100 })
  email: string;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.cp)
  @JoinColumn([
    { name: "id_ubicacion", referencedColumnName: "id" },
    { name: "codigo_pos", referencedColumnName: "cp" },
  ])
  ubicacion: Ubicacion;
  @Column({ length: 6 })
  codigo_pos: string;

  @Column({ length: 13 })
  rfc: string;

  @Column({ length: 10 })
  telefono: string;

  @Column({ length: 100 })
  calle: string;

  @Column({ length: 100 })
  colonia: string;
}
