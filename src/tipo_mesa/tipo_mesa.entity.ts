import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tipo_mesa' })
export class TipoMesa extends GenericEntity {
  @Column()
  descripcion: string;
}
