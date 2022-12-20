import { Combos } from 'src/combos/combos.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'images' })
export class Image extends GenericEntity {
  @Column()
  path: string;

  @ManyToOne(() => Combos, (combos) => combos.imagen)
  combo: Combos;

  @Column({ nullable: false })
  comboId: number;
}
