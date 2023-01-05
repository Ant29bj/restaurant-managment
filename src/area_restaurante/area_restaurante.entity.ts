import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('area_restaurante')
export class AreaRestaurante extends GenericEntity {
  @Column({ type: 'smallint' })
  id_area: number;

  @OneToMany(() => AreaRestaurante, (area) => area.id_area)
  area: AreaRestaurante[];

  @Column({ unique: true })
  descripcion: string;
}
