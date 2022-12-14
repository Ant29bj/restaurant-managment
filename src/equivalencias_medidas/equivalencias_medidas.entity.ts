import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'equivalencias_medidas' })
export class EquivalenciasMedidas extends GenericEntity {
  @Column({ type: 'smallint' })
  id_unidad: number;

  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: 'decimal', precision: 30, scale: 6, default: 0 })
  conv_equiva: number;
}
