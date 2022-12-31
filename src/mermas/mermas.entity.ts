import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('mermas')
export class Mermas extends GenericEntity {
  // Falta relacionar
  @PrimaryColumn()
  id_producto: number;

  // Falta relacionar
  @Column()
  descripcion: string;

  @Column()
  cantidad_merma: number;
}
