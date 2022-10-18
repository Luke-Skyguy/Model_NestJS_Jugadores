import { jugadores } from "src/modul_jugadores/jugador.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'fechas' })
export class AbstractFechas {

  constructor(params: AbstractFechas) {
    if (params) {
      this.dataAlta=
      params?.dataAlta||new Date().toISOString().split('T')[0];
      this.dataLastEdit=params?.dataLastEdit||undefined;
    }
  }
  @Column({nullable:true})
   dataAlta?: string;
  @Column({nullable:true})
  dataLastEdit?: string;

}