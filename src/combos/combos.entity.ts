import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'combos' })
export class Combos extends GenericEntity {
  @Column()
  nombre_combo: string;

  @Column({ type: 'money' })
  precio: number;

  @Column()
  imagen: string;

  @Column()
  status: string;
}
