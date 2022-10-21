import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Jugador } from '../modul_jugadores/jugador.entity';
  
  @Entity({ name: 'Entrenador' })
  export class Entrenador {
    //@OneToOne(() => equipos, (equipo) => equipo.)
    equipo: equipos;
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
    id_equip?:number
  }
  