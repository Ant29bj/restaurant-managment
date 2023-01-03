import { Empresas } from 'src/empresas/empresas.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Sucursales } from 'src/sucursales/sucursales.entity';
import { TipoPagos } from 'src/tipo_pagos/tipo_pagos.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'comanda' })
export class Comanda extends GenericEntity {
  @Column({ type: 'bigint' })
  id_comanda: number;

  /*

  @ManyToOne((type) => Sucursales, (sucursales) => sucursales.id, {})
  @JoinColumn([
    { name: 'id_sucursal', referencedColumnName: 'id' },
    { name: 'id_empresa', referencedColumnName: 'id_empresa' },
  ])
  sucursales: Sucursales;
*/
  @Column()
  id_sucursal: number;

  @ManyToOne((type) => Usuarios, {})
  @JoinColumn([{ name: 'id_usuarios', referencedColumnName: 'id' }])
  @Column()
  id_usuarios: number;
  usuario: number;

  /*
  @ManyToOne((type) => TipoPagos, (pago) => pago.id, {})
  @JoinColumn([{ name: 'id_pago', referencedColumnName: 'id' }])
  pagos: TipoPagos;
  */
  @Column()
  id_pago: number;

  @Column({ type: 'bigint' })
  id_mesa: number;

  @Column({ type: 'smallint' })
  consumo: number;

  @Column({ length: 25 })
  fecha_comanda: string;

  @Column({ length: 1 })
  estatus: string;
}
