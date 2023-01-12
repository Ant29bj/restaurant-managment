import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('area_restaurante')
export class AreaRestaurante extends GenericEntity {
  @OneToMany(() => AreaRestaurante, (area_restaurant) => area_restaurant.id)
  id_area: AreaRestaurante;

  @OneToMany(() => AreaRestaurante, (area) => area.id_area)
  area: AreaRestaurante[];

  @Column({ unique: true })
  descripcion: string;
}
