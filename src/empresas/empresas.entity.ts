import { AdminEmpresa } from "src/admin_empresa/admin_empresa.entity";
import { GenericEntity } from "src/generics/generic.entity";
import { RepresentanteLegal } from "src/representante_legal/representante_legal.entity";
import { Sucursales } from "src/sucursales/sucursales.entity";
import { Ubicacion } from "src/ubicacion/ubicacion.entity";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";

export enum EstatusEmpresa {
  ACTIVO = "activo",
  INACTIVO = "inactivo",
  SUSPENDIDA = "suspendida",
}
@Entity("empresas")
export class Empresas extends GenericEntity {
  @ManyToMany(() => AdminEmpresa, (admin) => admin.empresas)
  @JoinTable()
  administrador: AdminEmpresa[];

  @OneToMany(() => Empresas, (empresas) => empresas.id)
  empresas: Empresas[];

  @ManyToMany(() => RepresentanteLegal, (representante) => representante.id)
  @JoinColumn({ name: "id_representante", referencedColumnName: "id" })
  id_representante: RepresentanteLegal;

  @OneToMany(() => Sucursales, (sucursales) => sucursales.id_empresa)
  sucursales: Sucursales[];

  @Column()
  nombre_empresa: string;

  @Column()
  nombre_comercial: string;

  @Column({ length: 500 })
  descripcion: string;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.cp)
  @JoinColumn([
    { name: "id_ubicacion", referencedColumnName: "id" },
    { name: "codigo_pos", referencedColumnName: "cp" },
  ])
  ubicacion: Ubicacion;
  @Column({ length: 6 })
  codigo_pos: string;

  @ManyToOne(() => RepresentanteLegal, (representante) => representante.id)
  representante: RepresentanteLegal;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 11 })
  telefono: string;

  @Column({ length: 13 })
  rfc: string;

  @Column({ length: 255, nullable: true })
  facebook: string;

  @Column({ length: 255, nullable: true })
  instagram: string;

  @Column({ length: 255, nullable: true })
  twitter: string;

  @Column({ length: 1, default: 1 })
  estatus: string;

  @Column({ type: "money" })
  iva: number;
  // Falta relacioanr
  @Column({ nullable: true })
  imagen: string;
}
