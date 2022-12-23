import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('reportes')
export class Reportes extends GenericEntity {
  // Falta relacionar
  @Column({ type: 'bigint' })
  id_comanda: number;

  // Falta relacionar
  @Column({ type: 'bigint' })
  id_empresa: number;

  // Falta relacionar
  @Column({ type: 'bigint' })
  id_sucursal: number;

  @Column({ type: 'date' })
  fecha_ini: Date;

  @Column({ type: 'date' })
  fecha_fin: Date;

  @Column({ type: 'smallint' })
  id_area: number;
}
