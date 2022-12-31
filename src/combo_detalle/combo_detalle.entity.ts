import { Combos } from 'src/combos/combos.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'detalle_combos' })
export class ComboDetalle extends GenericEntity {
  @ManyToOne(() => Combos, (combos) => combos.id)
  id_combo: number;

  @Column({ type: 'bigint' }) // Falta relacionar con productos
  id_producto: number;

  @Column({ type: 'smallint' })
  cantidat: number;
}
