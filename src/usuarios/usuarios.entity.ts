import { Empresas } from 'src/empresas/empresas.entity';
import { GenericEntity } from 'src/generics/generic.entity';
import { Sucursales } from 'src/sucursales/sucursales.entity';
import { TipoUsuario } from 'src/tipo_usuario/tipo_usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('usuarios')
export class Usuarios extends GenericEntity {
  @OneToMany(() => Usuarios, (usuarios) => usuarios.id)
  usuarios: Usuarios[];

  //falta relacionar
  @ManyToOne((type) => Empresas, (empresa) => empresa.id, {})
  @JoinColumn({ name: 'id_empresa', referencedColumnName: 'id' })
  empresa: Empresas;
  @Column({ type: 'bigint' })
  id_empresa: number;

  //falta relacionar
  @ManyToOne((type) => Sucursales, (sucursal) => sucursal.id)
  @JoinColumn({ name: 'id_sucursal' })
  sucursal: Sucursales;
  @Column()
  id_sucursal: number;

  //falta relacionar
  @ManyToOne((type) => TipoUsuario, (tipusuario) => tipusuario.id)
  @JoinColumn({ name: 'id_tipo_usuario', referencedColumnName: 'id' })
  tip_usuario: TipoUsuario;
  @Column({ type: 'smallint' })
  id_tipo_usuario: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  // Falta relacionar
  @Column({ length: 255 })
  imagen: string;
}
