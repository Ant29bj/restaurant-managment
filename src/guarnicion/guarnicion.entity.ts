import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('guarnicion')
export class Guarnicion extends GenericEntity {
  // Falta relacionar tabla combos
  @Column({ type: 'smallint' })
  id_combo: number;

  @Column({ type: 'smallint' })
  cantidad: number;

  @Column({ type: 'smallint' })
  id_unidad: number;

  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: 'money' })
  total_guarnicion: number;
}
