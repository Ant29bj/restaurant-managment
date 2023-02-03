import { AreaRestaurante } from "src/area_restaurante/area_restaurante.entity";
import { GenericEntity } from "src/generics/generic.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: "comedor" })
export class Comedor extends GenericEntity {
  @ManyToOne(() => Comedor, (comedor) => comedor.id)
  @JoinColumn({ name: "id_comedor", referencedColumnName: "id" })
  comedor: Comedor;
  @Column({ type: "smallint" })
  id_comedor: number;

  @Column({ type: "smallint" })
  num_mesa: number;

  @ManyToOne(() => AreaRestaurante, (area_restaurant) => area_restaurant.id)
  @JoinColumn({ name: "id", referencedColumnName: "id" })
  area_restaurat: AreaRestaurante;
  @Column({ type: "smallint" })
  id_area: number;

  @OneToMany(() => Usuarios, (usuarios) => usuarios.id)
  @JoinColumn({ name: "id_usuarios", referencedColumnName: "id" })
  usuarios: Usuarios;
  @Column({ type: "bigint" })
  id_usuarios: number;
}
