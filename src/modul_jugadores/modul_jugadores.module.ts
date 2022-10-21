import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jugador } from 'src/entities/jugador.entity';
import { Tag } from 'src/entities/tag.entity';
import { JugadorController } from 'src/modul_jugadores/jugador.controller';
import { JugadorService } from './JugadorService';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador, Tag])],
  controllers: [JugadorController],
  providers: [JugadorService],
})
export class ModulJugadoresModule {}
