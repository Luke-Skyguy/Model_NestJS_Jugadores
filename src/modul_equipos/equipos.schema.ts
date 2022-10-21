import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EntrenadorEquipo = equipos;

@Schema()
export class equipos {
  @Prop()
  id_equipo: number;

  @Prop()
  nom_equipo: string;

  @Prop()
  numjugadores: number;

  @Prop()
  puntos_temporada: number;

  @Prop()
  id_entr: number;
}
