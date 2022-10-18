import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jugador } from "../modul_jugadores/jugador.entity";

@Entity({ name: 'equipos' })
export class equipos {
  @OneToMany(() => Jugador, (jugador) => jugador.equipo)
  jugador: Jugador[];
  constructor(params: equipos) {
    if (params) {
      Object.keys(params).forEach((key) => (this[key] = params[key]))
    }
  }
  @PrimaryGeneratedColumn()
  id_equipo: number;
  @Column()
  nom_equipo: string;
  @Column()
  numjugadores: number;

  @Column()
  puntos_temporada: number;
}