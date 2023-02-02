import { GenericEntity } from "src/generics/generic.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
@Entity("representate_legal")
export class Recetas extends GenericEntity {
    @Column()
    nombres: string;

    @Column()
    domicilio: string;

    @Column({ length: 13 })
    rfc: string;


    //telefono y correo
}
