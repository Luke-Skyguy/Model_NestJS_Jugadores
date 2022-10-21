import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jugador } from 'src/entities/jugador.entity';
import { Repository } from 'typeorm';
import { Equipo } from '../entities/equipo.entity';

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(Equipo) private equipoRepository: Repository<Equipo>,
    @InjectRepository(Jugador) private jugadorRepository: Repository<Jugador>,
  ) {}

  showAllTeams() {
    return this.equipoRepository.find();
  }
  // Busqueda con relacion a una entidad
  searchTeam(id: number) {
    return this.equipoRepository.find({ id_equipo: id });
  }

  async insertTeam(newTeam: Equipo): Promise<Equipo | undefined> {
    return await this.equipoRepository.save(newTeam);
  }

  async assignPlayerToTeam(idPlayer: number, teamId?: number): Promise<Equipo> {
    const player = (await this.jugadorRepository.findOne({
      where: {
        idJugador: idPlayer,
      },
      relations: ['equipo'],
    })) as Jugador;
    const team = (await this.equipoRepository.findOne({
      where: {
        idTeam: teamId,
      },
      relations: ['jugadores'],
    })) as Equipo;
    // player.tags[flag] = tag;
    team.jugador.push;
    this.jugadorRepository.save(player);
    return team;
  }
  async removeTeam(id: number) {
    const exist = await this.equipoRepository.findOne({ id_equipo: id });
    if (!exist) throw new NotFoundException('Este equipo no existe');

    return await this.equipoRepository.delete(id);
  }
  async updateTeam(id: number, newTeam: Equipo) {
    let updatedTeam: Equipo = await this.equipoRepository.findOne({
      id_equipo: id,
    });
    updatedTeam = { ...updatedTeam, ...newTeam };
    return await this.equipoRepository.save(updatedTeam);
  }
  searchPlayersOfATeam(id: number) {
    return this.equipoRepository.find({
      where: { id_equipo: id },
      relations: ['jugador'],
    });
  }
}
