import { Comanda } from 'src/comanda/comanda.entity';
import { Empresas } from 'src/empresas/empresas.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Sucursales } from 'src/sucursales/sucursales.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('reportes')
export class Reportes extends GenericEntity {
  // Falta relacionar
  @ManyToOne((type) => Comanda, (comanda) => comanda.id, {})
  @JoinColumn([{ name: 'id_comanda', referencedColumnName: 'id' }])
  comanda: Comanda;
  @Column({ type: 'bigint' })
  id_comanda: number;

  // Falta relacionar
  @ManyToOne((type) => Empresas, (empresa) => empresa.id, {})
  @JoinColumn([{ name: 'id_empresa', referencedColumnName: 'id' }])
  empresa: Empresas;
  @Column()
  id_empresa: number;

  // Falta relacionar
  @ManyToOne((type) => Sucursales, (sucursal) => sucursal.id, {})
  @JoinColumn([{ name: 'id_sucursal' }])
  sucursal: Sucursales;
  @Column()
  id_sucursal: number;

  @Column({ type: 'date' })
  fecha_ini: Date;

  @Column({ type: 'date' })
  fecha_fin: Date;

  @Column({ type: 'smallint' })
  id_area: number;
}
