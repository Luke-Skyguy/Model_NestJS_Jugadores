import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { jugadores } from '../modul_jugadores/jugador.entity';

@Entity({ name: 'equipos' })
export class equipos {
  @OneToMany(() => jugadores, (jugador) => jugador.equipo)
  jugador: jugadores[];
  constructor(params: equipos) {
    if (params) {
      Object.keys(params).forEach((key) => (this[key] = params[key]));
    }
  }
  @PrimaryGeneratedColumn()
  id_equipo: number;
  @Column()
  nom_equipo: string;
  @Column()
  jugadores: number;

  @Column()
  puntos_temporada: number;
}
