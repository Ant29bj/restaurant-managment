import { Funcionalidades } from 'src/funcionalidades/funcionalidades.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { TipoUsuario } from 'src/tipo_usuario/tipo_usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'rol_de_funcionalidades' })
export class RolDeFuncionalidades extends GenericEntity {
  @OneToMany(
    () => Funcionalidades,
    (funcionalidad) => funcionalidad.id_funcionalidad,
  )
  @JoinColumn({
    name: 'id_funcionalidad',
    referencedColumnName: 'id_funcionalidad',
  })
  id_funcionalidad: number;

  @ManyToOne(() => TipoUsuario, (tipo_usuario) => tipo_usuario.id)
  @JoinColumn({ name: 'id_tipo_usuario', referencedColumnName: 'id' })
  tipo_usuario: TipoUsuario;
  @Column({ type: 'smallint', nullable: true })
  id_tipo_usuario: number;
}
