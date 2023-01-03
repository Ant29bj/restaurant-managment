import { GenericEntity } from 'src/generics/generic.entity';
import { Unidades } from 'src/unidades/unidades.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'equivalencias_medidas' })
export class EquivalenciasMedidas extends GenericEntity {
  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: 'decimal', precision: 30, scale: 6, default: 0 })
  conv_equiva: number;

  @OneToMany(() => Unidades, (unidades) => unidades.unidad)
  unidades: Unidades[];
}
