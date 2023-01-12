import { GenericEntity } from 'src/generics/generic.entity';
import { RolDeFuncionalidades } from 'src/rol_de_funcionalidades/rol_de_funcionalidades.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'funcionalidades' })
export class Funcionalidades extends GenericEntity {
  @ManyToOne(() => RolDeFuncionalidades, (rol_func) => rol_func.id)
  @JoinColumn({ name: 'id_funcionalidad', referencedColumnName: 'id' })
  @Column({ type: 'bigint' })
  id_funcionalidad: number;

  @Column({ type: 'bigint' })
  id_opcion: number;

  @Column({ type: 'bigint', nullable: true })
  opcion_padre: number;

  @Column({ length: 100 })
  descripcion: string;
}
