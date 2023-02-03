import { GenericEntity } from "src/generics/generic.entity";
import { Sucursales } from "src/sucursales/sucursales.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity("area_restaurante")
export class AreaRestaurante extends GenericEntity {
  @OneToMany(() => AreaRestaurante, (area_restaurant) => area_restaurant.id)
  id_area: AreaRestaurante;

  @OneToMany(() => AreaRestaurante, (area) => area.id_area)
  area: AreaRestaurante[];

  @Column({ unique: true })
  descripcion: string;

  @ManyToOne(() => Sucursales, (sucursal) => sucursal.areas)
  sucursal: Sucursales;
}
