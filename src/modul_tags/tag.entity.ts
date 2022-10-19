import { Jugador } from 'src/modul_jugadores/jugador.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'tag' })
export class Tag {
  @ManyToMany((jugador) => Jugador,(jugador) => jugador.tags)
  jugadores:Jugador[];
  constructor(params: Tag) {
    if (params) {
      Object.keys(params).forEach((key) => (this[key] = params[key]));
    }
  }
  @PrimaryGeneratedColumn()
  idTag?: number;

  @Column({ nullable: true })
  nom_tag?: string;

  @Column({ nullable: true })
  color?: string;
}
