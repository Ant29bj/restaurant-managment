import { GenericEntity } from "src/generics/generic.entity";
import { TipoMermas } from "src/tipo_mermas/tipo_mermas.entity";
import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";

@Entity({ name: "categoria_merma" })
export class CategoriaMerma extends GenericEntity {
  @Column({ length: 100 })
  descripcion: string;

  @ManyToMany(() => TipoMermas, (tipo_merma) => tipo_merma.categoria_merma)
  tipo_merma: TipoMermas[];
}
