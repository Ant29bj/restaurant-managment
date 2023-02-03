import { Empresas } from "src/empresas/empresas.entity";
import { GenericEntity } from "src/generics/generic.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany } from "typeorm";
@Entity("representate_legal")
export class RepresentanteLegal extends GenericEntity {
  @OneToMany(() => Empresas, (empresas) => empresas.representante)
  cliente: Empresas[];

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
}
