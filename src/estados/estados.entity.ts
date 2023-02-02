import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'estados' })
export class Estados extends GenericEntity {

  @Column({ length: 50 })
  descripcion: string;
}
