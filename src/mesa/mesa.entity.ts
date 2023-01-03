import { AreaRestaurante } from 'src/area_restaurante/area_restaurante.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { TipoMesa } from 'src/tipo_mesa/tipo_mesa.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('mesas')
export class Mesas extends GenericEntity {
  @ManyToOne(() => AreaRestaurante, {})
  @JoinColumn([{ name: 'id_area', referencedColumnName: 'id' }])
  @Column()
  id_area: number;
  Area: AreaRestaurante;

  @ManyToOne(() => TipoMesa)
  @JoinColumn([{ name: 'id_tipo_mesa', referencedColumnName: 'id' }])
  @Column()
  id_tipo_mesa: number;
  Tipo_mesa: TipoMesa;

  @Column({ type: 'smallint' })
  capacidad_mesa: number;
}
