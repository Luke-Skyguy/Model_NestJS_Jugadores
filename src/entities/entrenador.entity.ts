import { Equipo } from 'src/entities/equipo.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'entrenador' })
export class Entrenador {
  @OneToOne(() => Equipo, (equipo) => equipo.id_entr)
  equipo: Equipo;
  constructor(params: Entrenador) {
    if (params) {
      Object.keys(params).forEach((key) => (this[key] = params[key]));
    }
  }
  @PrimaryGeneratedColumn()
  id_entrenador?: number;
  @Column()
  nom_entrenador?: string;
  @Column()
  id_equip?: number;
}
