import { Comanda } from 'src/comanda/comanda.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Insumos } from 'src/insumos/insumos.entity';
import { Servicios } from 'src/servicios/servicios.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'comanda_servicios' })
export class ComandaServicios extends GenericEntity {
  @ManyToOne(() => Comanda, (comanda) => comanda.id)
  @JoinColumn({ name: 'id_comanda', referencedColumnName: 'id' })
  comanda: Comanda;
  @Column({ type: 'bigint' })
  id_comanda: number;

  @ManyToOne(() => Servicios, (servicios) => servicios.id, {})
  @JoinColumn({ name: 'id_servicio', referencedColumnName: 'id' })
  servicio: Servicios;
  @Column()
  id_servicio: number;

  @Column({ type: 'smallint' })
  cantidad: number;

  @Column({ length: 100 })
  observaciones: string;

  @ManyToOne(() => Insumos, (isumos) => isumos.id)
  @JoinColumn({ name: 'id_insumos', referencedColumnName: 'id' })
  insumos: Insumos;
  @Column({ type: 'smallint' })
  id_insumos: number;
}
