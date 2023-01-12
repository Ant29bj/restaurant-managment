import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'servicios' })
export class Servicios extends GenericEntity {
  @Column()
  descripcion: string;
}
