import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'funcionalidades' })
export class Funcionalidades extends GenericEntity {
  @Column({ type: 'bigint' })
  id_funcionalidad: number;

  @Column({ type: 'bigint' })
  id_opcion: number;

  @Column({ type: 'bigint', nullable: true })
  opcion_padre: number;

  @Column({ length: 100 })
  descripcion: string;
}
