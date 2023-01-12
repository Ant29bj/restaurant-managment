import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'dias_habiles' })
export class DiasHabiles extends GenericEntity {
  @Column({ type: 'smallint' })
  id_dia: number;

  @Column({ length: 50 })
  descripcion: string;

  @Column({ length: 1 })
  estatus: string;

  @Column({ length: 20 })
  hora_inicio: string;

  @Column({ length: 20 })
  hora_cierre: string;
}
