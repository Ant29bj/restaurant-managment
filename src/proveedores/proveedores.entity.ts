import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

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
  @Column({ type: 'smallint' })
  id_estado: number;

  // Relacionar
  @Column({ type: 'smallint' })
  id_municipio: number;

  // Relacionar
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
