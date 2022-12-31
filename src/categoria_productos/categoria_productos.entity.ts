import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'categoria_productos' })
export class CategoriaProductos extends GenericEntity {
  @Column({ type: 'smallint' })
  id_categoria: number;


  @Column({ length: 100 })
  descripcion: string;

  
}
