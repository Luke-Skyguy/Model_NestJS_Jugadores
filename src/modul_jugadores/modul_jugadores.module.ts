import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorController } from 'src/modul_jugadores/jugador.controller';
import { JugadorService } from './JugadorService';
import { jugadores } from 'src/modul_jugadores/jugador.entity';
@Module({
    imports:[TypeOrmModule.forFeature([jugadores])],
    controllers:[JugadorController],
    providers:[JugadorService]
})
export class ModulJugadoresModule {}
