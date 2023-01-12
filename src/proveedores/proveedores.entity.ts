import { Estados } from 'src/estados/estados.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Localidades } from 'src/localidades/localidades.entity';
import { Municipios } from 'src/municipio/municipios.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('proveedores')
export class Proveedores extends GenericEntity {
  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido_pat: string;

  @Column({ length: 100 })
  apellido_mat: string;

  @Column({ length: 100 })
  email: string;

  // Relacionar
  @ManyToOne(() => Estados, (estado) => estado.id, {})
  @JoinColumn({ name: 'id_estado', referencedColumnName: 'id' })
  estado: Estados;
  @Column({ type: 'smallint' })
  id_estado: number;

  // Relacionar
  @ManyToOne(() => Municipios, (municipio) => municipio.clave, {})
  @JoinColumn([
    { name: 'id_estado', referencedColumnName: 'estado_id' },
    { name: 'id_municipio', referencedColumnName: 'clave' },
  ])
  municipio: Municipios;
  @Column({ type: 'smallint' })
  id_municipio: number;

  // Relacionar
  @ManyToOne(() => Localidades, (localidad) => localidad.cve_loc)
  @JoinColumn([
    { name: 'localidad', referencedColumnName: 'cve_loc' },
    { name: 'id_municipio', referencedColumnName: 'cve_mun' },
    { name: 'id_estado', referencedColumnName: 'cve_ent' },
  ])
  localidades: Localidades;
  @Column({ type: 'smallint' })
  localidad: number;

  @Column({ length: 13 })
  rfc: string;

  @Column({ length: 10 })
  telefono: string;

  @Column({ length: 100 })
  calle: string;

  @Column({ length: 100 })
  colonia: string;

  @Column({ length: 6 })
  codigo_pos: string;
}
