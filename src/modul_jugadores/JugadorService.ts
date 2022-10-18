import { Injectable, Logger, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { jugadores } from 'src/modul_jugadores/jugador.entity';
import { off } from 'process';
import { Tag } from 'src/modul_tags/tag.entity';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(jugadores)
    private jugadorRepository: Repository<jugadores>,
    @InjectRepository(Tag) private tagRepository: Repository<Tag>,
  ) {}

  // example how to show DM entity
  showAllRepository() {
    return this.jugadorRepository.find();
    //const player = { name: 'Villa', team: 'Atletico', num: 7 };
    //await playerRepository.save(player);
  }
  // Busqueda con relacion a una entidad
  searchRepository(id: number) {
    return this.jugadorRepository.find({ idJugador: id });
  }
  // Busqueda con relacion a dos entidades
  async searchPlayerTeam(id: number) {
    return this.jugadorRepository.find({
      where: { idJugador: id },
      relations: ['equipo'],
    });
  }
  // Busqueda paginada
  searchAllPaged(limit: number, offset: number) {
    return this.jugadorRepository.find({
      skip: offset,
      take: limit,
    });
  }
  async insertPlayer(newPlayer: jugadores): Promise<jugadores | undefined> {
    return await this.jugadorRepository.save(newPlayer);
  }
  async removePlayer(id: number) {
    const exist = await this.jugadorRepository.findOne({ idJugador: id });
    if (!exist) throw new NotFoundException('Este post no existe');

    return await this.jugadorRepository.delete(id);
  }
  async updatePlayer(id: number, newPlayer: jugadores) {
    let updatedPlayer: jugadores = await this.jugadorRepository.findOne({
      idJugador: id,
    });
    updatedPlayer = { ...updatedPlayer, ...newPlayer };
    return await this.jugadorRepository.save(updatedPlayer);
  }

  //Cambio de tag de player
  async assignPlayerToTag(
    idPlayer: number,
    tagId?: number,
  ): Promise<jugadores> {
    if (idPlayer) {
      const player = (await this.jugadorRepository.findOne({
        where: {
          idJugador: idPlayer,
          idTag: tagId,
        },
        relations: ['tags'],
      })) as jugadores;

      if (player) {
        const tag = (await this.tagRepository.findOne({
          where: {
            idJugador: idPlayer,
            idTag: tagId,
          },
        })) as Tag;

        if (tag) {
          player.tags.push(tag);
          this.jugadorRepository.save(player);
          return player;
        }
      }
    }
    return null;
  }
}
