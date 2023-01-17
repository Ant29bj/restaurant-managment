import { GenericEntity } from 'src/generics/generic.entity';
import { Ubicacion } from 'src/ubicacion/ubicacion.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

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

  @OneToOne(() => Ubicacion, (ubicacion) => ubicacion.cp)
  @JoinColumn([
    { name: 'id_ubicacion', referencedColumnName: 'id' },
    { name: 'codigo_pos', referencedColumnName: 'cp' },
  ])
  ubicacion: Ubicacion;
  @Column({ length: 6 })
  codigo_pos: string;

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

  @Column({ type: 'money' })
  iva: number;
  // Falta relacioanr
  @Column({ nullable: true })
  imagen: string;
}
