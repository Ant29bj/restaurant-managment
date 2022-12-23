import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('tipo_usuario')
export class TipoUsuario extends GenericEntity {
  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: 'smallint' })
  cantidad_usa: number;

  @Column({ type: 'smallint' })
  id_rolbase: number;
}
