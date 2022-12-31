import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('municipios')
export class Municipios {
  // Falta relacionar
  @PrimaryColumn()
  estado_id: number;

  @PrimaryColumn()
  clave: number;

  @Column()
  descripcion: string;
  @Column()
  estatus: string;
}
