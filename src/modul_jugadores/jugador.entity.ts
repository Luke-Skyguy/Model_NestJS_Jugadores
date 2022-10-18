import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { equipos } from "src/modul_equipos/equipos.entity";
import { Tag } from "src/modul_tags/tag.entity";
import { AbstractFechas } from "src/modul_fechas/fechas_entity";
@Entity({ name: 'jugadores'})
export class jugadores extends AbstractFechas {
  constructor(params: jugadores) {
    super(params);
    if (params) {
      Object.keys(params).forEach((key) => (this[key] = params[key]))
    }
  }

  @ManyToOne(() => equipos, (equipo) => equipo.jugadores)
  equipo?: equipos;
  @ManyToMany((tag) => Tag)
  @JoinTable( {name:'tag_jugadores'})
  tag: Tag[];

  @PrimaryGeneratedColumn()
  idJugador?: number;

  @Column(({ name: 'ACTIVE', nullable: true }))
  nom_jugador?: string;

  @Column()
  num_jugador?: number;

  @Column()
  goles_temporada?: number;

  @Column()
  posicion?:string

  @Column()
  equipIdEquipo?:number
  
  @Column()
  dataAlta?: string;

  @Column()
  dataLastEdit: string;
}