import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Entrenador } from './entrenador.entity';
import { Jugador } from './jugador.entity';

@Entity({ name: 'equipo' })
export class Equipo {
  @OneToMany(() => Jugador, (jugador) => jugador.equipo, {
    nullable: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  jugador: Jugador[];
  @OneToOne(() => Entrenador, (entrenador) => entrenador.id_equip)
  entrenador: Entrenador;
  constructor(params: Equipo) {
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
