import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquiposController } from './equipos.controller';
import { EquiposService } from './equipos.service';
import { Equipo } from '../entities/equipo.entity';
import { Jugador } from 'src/entities/jugador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Equipo, Jugador])],
  controllers: [EquiposController],
  providers: [EquiposService],
})
export class ModulEquiposModule {}
