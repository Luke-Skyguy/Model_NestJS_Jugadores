import { jugadores } from "src/modul_jugadores/jugador.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'Tag'})
export class Tag {
  //@ManyToMany((jugador) => jugadores)
  jugador: jugadores[];
  constructor(params: Tag) {
    if (params) {
      Object.keys(params).forEach((key) => (this[key] = params[key]))
    }
  }
  @PrimaryGeneratedColumn()
  idTag?: number;

  @Column()
  nom_tag?: string;

  @Column()
  idjugador?: number;

  @Column()
  color?: string;

}