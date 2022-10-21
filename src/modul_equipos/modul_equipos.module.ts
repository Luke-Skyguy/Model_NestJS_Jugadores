import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquiposController } from './equipos.controller';
import { EquiposService } from './equipos.service';
import { equipos } from './equipos.entity';
import { Jugador } from 'src/modul_jugadores/jugador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([equipos,Jugador])],
  controllers: [EquiposController],
  providers: [EquiposService],
})
export class ModulEquiposModule {}
