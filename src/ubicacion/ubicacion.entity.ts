import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, JoinColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { Estados } from '../estados/estados.entity';

@Entity('ubicacion')
export class Ubicacion extends GenericEntity {

  @ManyToOne(() => Estados, (estados) => estados.id, {})
  @JoinColumn({ name: 'id_estado', referencedColumnName: 'id' })
  id_estado: Estados;

  @Column()
  estado: string;

  @Column()
  id_municipio: string;

  @Column()
  municipio: string;

  @Column()
  ciudad: string;

  @Column()
  zona: string;

  @PrimaryColumn()
  cp: string;

  @Column()
  asentamiento: string;

  @Column()
  tipo: string;
}
