import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('ubicacion')
export class Ubicacion extends GenericEntity {
  @Column()
  id_estado: string;

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

  @Column()
  cp: string;

  @Column()
  asentamiento: string;

  @Column()
  tipo: string;
}
