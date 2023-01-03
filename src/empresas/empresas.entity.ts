import { Estados } from 'src/estados/estados.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Localidades } from 'src/localidades/localidades.entity';
import { Municipios } from 'src/municipio/municipios.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

export enum EstatusEmpresa {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo',
  SUSPENDIDA = 'suspendida',
}
@Entity('empresas')
export class Empresas extends GenericEntity {
  //Falta relacionar
  @ManyToOne((type) => Estados, (estados) => estados.id, {})
  @JoinColumn({ name: 'ID_Estado', referencedColumnName: 'id' })
  @Column({ type: 'smallint' })
  ID_Estado: number;
  estados: Estados;

  // Falta relacionar
  @ManyToOne(() => Municipios, {})
  @JoinColumn([
    { name: 'ID_Estado', referencedColumnName: 'estado_id' },
    { name: 'ID_Municipio', referencedColumnName: 'clave' },
  ])
  municipio: Municipios;
  @Column({ type: 'smallint' })
  ID_Municipio: number;

  //Falta relacionar
  @ManyToOne(() => Localidades, { eager: true })
  @JoinColumn([
    { name: 'ID_Estado', referencedColumnName: 'cve_ent' },
    { name: 'ID_Municipio', referencedColumnName: 'cve_mun' },
    { name: 'ID_Localidad', referencedColumnName: 'cve_loc' },
  ])
  localidades: Localidades;
  @Column({ type: 'smallint' })
  ID_Localidad: number;

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
