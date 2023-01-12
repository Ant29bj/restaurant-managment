import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'categoria_productos' })
export class CategoriaProductos extends GenericEntity {
  @ManyToOne(() => CategoriaProductos, (cat_prod) => cat_prod.id)
  @JoinColumn({ name: 'id_categoria', referencedColumnName: 'id' })
  categoria_producto: CategoriaProductos;
  @Column({ type: 'smallint' })
  id_categoria: number;

  @OneToMany(() => CategoriaProductos, (cat) => cat.id_categoria)
  area: CategoriaProductos[];

  @Column({ length: 100 })
  descripcion: string;
}
