import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'unidades' })
export class Unidades extends GenericEntity {
  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: 'decimal', precision: 9 })
  valor: number;
}
