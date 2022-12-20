import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('area_restaurante')
export class AreaRestaurante extends GenericEntity {
  @Column({ unique: true })
  descripcion: string;
}
