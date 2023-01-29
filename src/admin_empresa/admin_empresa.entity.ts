import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

export enum TipoPersona {
  MORAL = 'moral',
  REAL = 'real',
}

@Entity('admin_empresa')
export class AdminEmpresa extends GenericEntity {
  @Column({ nullable: false })
  tipo_persona: TipoPersona;
}
