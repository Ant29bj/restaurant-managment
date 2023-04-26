import { GenericEntity } from 'src/generics/generic.entity';
import { Image } from 'src/images/images.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'combos' })
export class Combos extends GenericEntity {
  @Column()
  nombre_combo: string;

  @Column("decimal", { precision: 7, scale: 2 })
  precio: number;

  @OneToMany(() => Image, (images) => images.comboId)
  imagen: Image[];

  @Column()
  status: string;
}
