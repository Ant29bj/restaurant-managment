import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'rol_de_funcionalidades' })
export class RolDeFuncionalidades extends GenericEntity {
  @Column({ type: 'bigint' })
  id_funcionalidad: number;

  @Column({ type: 'smallint', nullable: true })
  id_tipo_usuario: number;
}
