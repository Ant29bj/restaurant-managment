import { CategoriaMerma } from "src/categoria_merma/categoria_merma.entity";
import { GenericEntity } from "src/generics/generic.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity("tipo_mermas")
export class TipoMermas extends GenericEntity {
  @Column({ length: 100 })
  descripcion: string;

  @ManyToMany(() => CategoriaMerma)
  @JoinTable({
    name: "tipo_mermas_categoria",
    joinColumn: {
      name: "tipo_merma_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "categoria_merma_id",
      referencedColumnName: "id",
    },
  })
  categoria_merma: CategoriaMerma[];
}
