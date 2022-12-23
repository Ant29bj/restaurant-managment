import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';
@Entity('recetas')
export class Recetas extends GenericEntity {
  // Falta relacionar
  @Column()
  id_producto: number;

  @Column({ length: 100 })
  descripcion: string;

  @Column({ type: 'decimal', precision: 5 })
  total_receta: number;
}
