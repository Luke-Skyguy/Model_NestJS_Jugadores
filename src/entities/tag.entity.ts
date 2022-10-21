import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Jugador } from './jugador.entity';
@Entity({ name: 'tag' })
export class Tag {
  jugadores: Jugador[];
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
