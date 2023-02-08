import { GenericEntity } from "src/generics/generic.entity";
import { Sucursales } from "src/sucursales/sucursales.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Cliente } from "../cliente/cliente.entity";
import { Mesas } from "../mesa/mesa.entity";

@Entity({ name: "reservaciones" })
export class Reservaciones extends GenericEntity {
  @ManyToOne((type) => Cliente, (cliente) => cliente.id, {})
  @JoinColumn({ name: "id_cliente", referencedColumnName: "id" })
  cliente: Cliente;
  @Column({ type: "bigint" })
  id_cliente: number;

  @ManyToOne((type) => Mesas, (mesa) => mesa.id, {})
  @JoinColumn({ name: "id_mesa", referencedColumnName: "id" })
  mesa: Mesas;
  @Column({ type: "smallint" })
  id_mesa: number;

  @Column({ length: 100 })
  nombre_cliente: string;

  @ManyToOne(() => Sucursales, (sucursales) => sucursales.reservaciones)
  sucursal: Sucursales;
}
