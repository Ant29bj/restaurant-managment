import { Empresas } from "src/empresas/empresas.entity";
import { GenericEntity } from "src/generics/generic.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

export enum TipoPersona {
  MORAL = "moral",
  REAL = "real",
}

@Entity("admin_empresa")
export class AdminEmpresa extends GenericEntity {
  @ManyToMany(() => Empresas)
  empresas: Empresas[];

  @Column({ type: "varchar", length: 255, nullable: false })
  nombre: string;

  @Column({ type: "enum", enum: TipoPersona, nullable: false })
  tipo_persona: TipoPersona;

  @Column({ type: "varchar", length: 13, nullable: false })
  rfc: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  direccion: string;
}
