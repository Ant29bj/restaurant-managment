import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('tipo_mermas')
export class TipoMermas extends GenericEntity {
  @Column({ length: 100 })
  descripcion: string;
}
