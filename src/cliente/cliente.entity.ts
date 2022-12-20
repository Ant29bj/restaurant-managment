import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'cliente' })
export class Cliente extends GenericEntity {
  @Column()
  nombre: string;

  @Column({ length: 10, unique: true })
  telefono: string;

  @Column()
  email: string;

  @Column()
  direccion: string;
}
