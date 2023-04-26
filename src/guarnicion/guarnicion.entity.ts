import { Combos } from 'src/combos/combos.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Unidades } from 'src/unidades/unidades.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('guarnicion')
export class Guarnicion extends GenericEntity {
  // Falta relacionar tabla combos
  @ManyToOne(() => Combos, (combos) => combos.id, {})
  @JoinColumn({ name: 'id_combo', referencedColumnName: 'id' })
  @Column({ type: 'smallint' })
  id_combo: number;
  combos: Combos;

  @Column({ type: 'smallint' })
  cantidad: number;

  @ManyToOne(() => Unidades, (unidades) => unidades.id)
  @JoinColumn({ name: 'id_unidad', referencedColumnName: 'id' })
  @Column({ type: 'smallint' })
  id_unidad: number;
  unidad: Unidades;

  @Column({ length: 100 })
  descripcion: string;

  @Column("decimal", { precision: 7, scale: 2 })
  total_guarnicion: number;
}
