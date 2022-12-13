import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'categoria_merma' })
export class CategoriaMerma extends GenericEntity {
    @Column({ length: 100 })
    descripcion: string;


}
