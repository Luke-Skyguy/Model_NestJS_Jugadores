import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Equipo } from 'src/entities/equipo.entity';

export type EquipoDocument = Equipo & Document;

@Schema()
export class SchemaEquipos {
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
export const EquipoSchema = SchemaFactory.createForClass(Equipo);