import { EquivalenciasMedidas } from 'src/equivalencias_medidas/equivalencias_medidas.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, ManyToMany, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'unidades' })
export class Unidades extends GenericEntity {
  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: 'decimal', precision: 9 })
  valor: number;

  @Column()
  unidadId: number;

  @ManyToOne(() => EquivalenciasMedidas, (equiv) => equiv.unidades)
  unidad: EquivalenciasMedidas;
}
