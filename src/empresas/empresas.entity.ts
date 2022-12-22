import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

export enum EstatusEmpresa {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo',
  SUSPENDIDA = 'suspendida',
}
@Entity('empresas')
export class Empresas extends GenericEntity {
  //Falta relacionar
  @Column({ type: 'smallint' })
  id_estado: number;
  // Falta relacionar
  @Column({ type: 'smallint' })
  id_municipio: number;
  //Falta relacionar
  @Column({ type: 'smallint' })
  id_localidad: number;

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
