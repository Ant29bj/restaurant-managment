import { GenericEntity } from 'src/generics/generic.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente extends GenericEntity {
  @OneToMany(() => Cliente, (cliente) => cliente.id)
  cliente: Cliente[];

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 13, unique: true })
  telefono: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  direccion: string;
}
