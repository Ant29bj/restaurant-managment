import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'categoria_productos' })
export class CategoriaProductos extends GenericEntity {
  @Column({ type: 'smallint' })
  id_categoria: number;

  @OneToMany(() => CategoriaProductos, (cat) => cat.id_categoria)
  area: CategoriaProductos[];

  @Column({ length: 100 })
  descripcion: string;
}
