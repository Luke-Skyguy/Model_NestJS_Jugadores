import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Equipo } from 'src/entities/equipo.entity';
import { AbstractFechas } from 'src/entities/fechas.entity';
import { Tag } from './tag.entity';
@Entity({ name: 'jugadores' })
export class Jugador extends AbstractFechas {
  constructor(params: Jugador) {
    super(params);
    if (params) {
      Object.keys(params).forEach((key) => (this[key] = params[key]));
    }
  }

  @ManyToOne(() => Equipo, (equipo) => equipo.numjugadores)
  equipo?: Equipo;

  @ManyToMany((tag) => Tag, (tag) => tag.jugadores, {
    eager: false,
  })
  @JoinTable({
    name: 'tag_to_jugador',
    joinColumn: {
      name: 'TAG_ID',
    },
    inverseJoinColumn: {
      name: 'JUGADOR_ID',
    },
  })
  tags?: Tag[];

  @PrimaryGeneratedColumn()
  idJugador?: number;

  @Column({ name: 'ACTIVE', nullable: true })
  nom_jugador?: string;

  @Column({ nullable: true })
  num_jugador?: number;

  @Column({ nullable: true })
  goles_temporada?: number;

  @Column({ nullable: true })
  posicion?: string;

  @Column({ nullable: true })
  dataAlta?: string;

  @Column({ nullable: true })
  dataLastEdit?: string;
}
