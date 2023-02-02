import { Empresas } from "src/empresas/empresas.entity";
import { GenericEntity } from "src/generics/generic.entity";
import { Column, Entity, JoinColumn, ManyToMany } from "typeorm";
@Entity("representate_legal")
export class RepresentanteLegal extends GenericEntity {
  @ManyToMany(() => Empresas, (empresas) => empresas.id)
  @JoinColumn({ name: "id_empresas", referencedColumnName: "id" })
  id_empresas: Empresas;

  @Column()
  nombres: string;

  @Column()
  domicilio: string;

  @Column({ length: 13 })
  rfc: string;

  @Column({ length: 10 })
  telefono: string;

  @Column({ length: 255 })
  email: string;
  //telefono y correo
}
