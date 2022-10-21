import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorController } from 'src/modul_jugadores/jugador.controller';
import { JugadorService } from './JugadorService';
import { Jugador } from 'src/modul_jugadores/jugador.entity';
import { Tag } from 'src/modul_tags/tag.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), TypeOrmModule.forFeature([Jugador, Tag])],
  controllers: [JugadorController],
  providers: [JugadorService],
})
export class ModulJugadoresModule {}
