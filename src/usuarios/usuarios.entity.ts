import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('usuarios')
export class Usuarios extends GenericEntity {
  //falta relacionar
  @Column({ type: 'bigint' })
  id_empresa: number;

  //falta relacionar
  @Column({ type: 'bigint' })
  id_sucursal: number;

  //falta relacionar
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
