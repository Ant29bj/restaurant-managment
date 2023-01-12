import { EquivalenciasMedidas } from 'src/equivalencias_medidas/equivalencias_medidas.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'insumos' })
export class Insumos extends GenericEntity {
  @Column({ type: 'smallint' })
  stock: number;

  @Column({ type: 'smallint' })
  stock_minimo: number;

  @ManyToOne(() => EquivalenciasMedidas, (equivalencia) => equivalencia.id)
  @JoinColumn({ name: 'id_equivalencia', referencedColumnName: 'id' })
  equivalencia: EquivalenciasMedidas;
  @Column({ type: 'smallint' })
  id_equivalencia: number;

  @Column({ length: 1 })
  estatus: string;
}
