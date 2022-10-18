import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorController } from 'src/modul_jugadores/jugador.controller';
import { JugadorService } from './JugadorService';
import { jugadores } from 'src/modul_jugadores/jugador.entity';
import { Tag } from 'src/modul_tags/tag.entity';
@Module({
    imports:[TypeOrmModule.forFeature([jugadores, Tag])],
    controllers:[JugadorController],
    providers:[JugadorService]
})
export class ModulJugadoresModule {}
