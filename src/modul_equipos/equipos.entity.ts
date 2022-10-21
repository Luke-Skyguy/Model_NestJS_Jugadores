import { Entrenador } from 'src/modul_entrenador/entrenador.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Jugador } from '../modul_jugadores/jugador.entity';

@Entity({ name: 'equipos' })
export class equipos {
  @OneToMany(() => Jugador, (jugador) => jugador.equipo, {    nullable: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',})
  jugador: Jugador[];
 // @OneToOne(() => Entrenador, (entrenador) => entrenador.id_equip)
  entrenador: Entrenador;
   
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
  numjugadores: number;

  @Column()
  puntos_temporada: number;

  @Column()
  id_entr: number;
}
