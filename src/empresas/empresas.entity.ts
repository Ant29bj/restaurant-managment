import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

export enum EstatusEmpresa {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo',
  SUSPENDIDA = 'suspendida',
}
@Entity('empresas')
export class Empresas extends GenericEntity {
  @OneToMany(() => Empresas, (empresas) => empresas.id)
  empresas: Empresas[];

  @Column()
  nombre_empresa: string;

  @Column()
  nombre_comercial: string;

  @Column({ length: 500 })
  descripcion: string;

  @Column({ length: 6 })
  codigo_pos: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 11 })
  telefono: string;

  @Column({ length: 13 })
  rfc: string;

  @Column({ length: 255 })
  facebook: string;

  @Column({ length: 255 })
  instagram: string;

  @Column({ length: 255 })
  twitter: string;

  @Column({ length: 1, default: 1 })
  estatus: string;

  @Column({ type: 'money' })
  iva: number;
  // Falta relacioanr
  @Column()
  imagen: string;
}
