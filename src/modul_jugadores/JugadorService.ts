import { Injectable, Logger, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from 'src/entities/equipo.entity';
import { off } from 'process';
import { Tag } from 'src/entities/tag.entity';
import { Jugador } from 'src/entities/jugador.entity';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(Jugador)
    private jugadorRepository: Repository<Jugador>,
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
  // Busqueda de abstractas
  async searchAbstractDate(id: string) {
    return await this.jugadorRepository.findOne({
      select: ['nom_jugador', 'num_jugador'],
      where: { idJugador: id },
    });
  }

  async insertPlayer(newPlayer: Jugador): Promise<Jugador | undefined> {
    return await this.jugadorRepository.save(newPlayer);
  }
  async removePlayer(id: number) {
    const exist = await this.jugadorRepository.findOne({ idJugador: id });
    if (!exist) throw new NotFoundException('Este post no existe');

    return await this.jugadorRepository.delete(id);
  }
  async updatePlayer(id: number, newPlayer: Jugador) {
    let updatedPlayer: Jugador = await this.jugadorRepository.findOne({
      idJugador: id,
    });
    updatedPlayer = { ...updatedPlayer, ...newPlayer };
    return await this.jugadorRepository.save(updatedPlayer);
  }

  //Asignar jugador a equipo

  //Cambio de tag de player
  async assignPlayerToTag(idPlayer: number, tagId?: number): Promise<Jugador> {
    const player = (await this.jugadorRepository.findOne({
      where: {
        idJugador: idPlayer,
      },
      relations: ['tags'],
    })) as Jugador;
    const tag = (await this.tagRepository.findOne({
      where: {
        idTag: tagId,
      },
      relations: ['jugadores'],
    })) as Tag;
    // player.tags[flag] = tag;
    player.tags.push(tag);
    this.jugadorRepository.save(player);
    return player;
  }
  async disassignTaskToTag(
    idPlayer?: number,
    tagId?: number,
  ): Promise<Jugador> {
    const player = (await this.jugadorRepository.findOne({
      where: {
        idJugador: idPlayer,
      },
      relations: ['tags'],
    })) as Jugador;

    const tag = (await this.tagRepository.findOne({
      where: {
        idTag: tagId,
      },
    })) as Tag;

    if (tag) {
      player.tags = player.tags.filter((singleTag) => {
        !Object.is(singleTag, tag);
      });
      this.jugadorRepository.save(player);
      return player;
    }
    return null;
  }
}
