import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('localidades')
export class Localidades {
  @PrimaryColumn()
  cve_ent: number;

  @PrimaryColumn()
  cve_mun: number;
  @PrimaryColumn()
  cve_loc: number;

  @Column({ length: 128 })
  nom_loc: string;

  @Column({ length: 50 })
  estatus: string;
}
