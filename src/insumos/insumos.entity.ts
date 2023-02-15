import { EquivalenciasMedidas } from 'src/equivalencias_medidas/equivalencias_medidas.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Recetas } from 'src/recetas/recetas.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne} from 'typeorm';

@Entity({ name: 'insumos' })
export class Insumos extends GenericEntity {
  @Column({ type: 'smallint' })
  stock: number;

  @Column({ type: 'smallint' })
  stock_minimo: number;

  @ManyToMany(()=> Recetas,(recetas)=>recetas.insumos)
  receta: Recetas[];

  @ManyToOne(() => EquivalenciasMedidas, (equivalencia) => equivalencia.id)
  @JoinColumn({ name: 'id_equivalencia', referencedColumnName: 'id' })
  equivalencia: EquivalenciasMedidas;
  @Column({ type: 'smallint' })
  id_equivalencia: number;

  @Column({ length: 1 })
  estatus: string;
}
