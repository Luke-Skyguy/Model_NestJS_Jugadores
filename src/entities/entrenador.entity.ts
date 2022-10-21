import { Equipo } from 'src/entities/equipo.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Entrenador' })
export class Entrenador {
  //@OneToOne(() => equipos, (equipo) => equipo.)
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
