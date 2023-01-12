import { Empresas } from 'src/empresas/empresas.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { TipoPagos } from 'src/tipo_pagos/tipo_pagos.entity';
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Mesas } from '../mesa/mesa.entity';

@Entity({ name: 'comanda' })
export class Comanda extends GenericEntity {
  @ManyToOne(() => Empresas, (empresas) => empresas.id, {})
  @JoinColumn({ name: 'id_empresa', referencedColumnName: 'id' })
  empresa: Empresas;
  @Column()
  id_empresa: number;

  @ManyToOne((type) => Usuarios, (usuarios) => usuarios.id, {})
  @JoinColumn([{ name: 'id_usuarios', referencedColumnName: 'id' }])
  usuario: Usuarios;
  @Column()
  id_usuarios: number;

  @ManyToOne((type) => TipoPagos, (tiPagos) => tiPagos.id, {})
  @JoinColumn([{ name: 'id_pago', referencedColumnName: 'id' }])
  tipo_pagos: TipoPagos;
  @Column()
  id_pago: number;

  @ManyToOne((type) => Mesas, (mesas) => mesas.id, {})
  @JoinColumn([{ name: 'id_mesa', referencedColumnName: 'id' }])
  mesas: Mesas;
  @Column()
  id_mesa: number;

  @Column({ type: 'smallint' })
  consumo: number;

  @Column({ length: 25 })
  fecha_comanda: string;

  @Column({ length: 1 })
  estatus: string;
}
