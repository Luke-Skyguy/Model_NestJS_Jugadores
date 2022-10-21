import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { off } from 'process';
import { AppService } from 'src/app.service';
import { Jugador } from 'src/entities/jugador.entity';
import { JugadorService } from './JugadorService';

@Controller('jugadores')
export class JugadorController {
  private readonly logger = new Logger(JugadorController.name);
  constructor(private playerService: JugadorService) {}

  //Consultas
  // @Get()
  // getRepository() {
  //   this.logger.debug('log:');
  //   return this.playerService.showAllRepository();
  // }

  getPlayerRepository(@Param() id: number) {
    return this.playerService.searchRepository(id);
  }

  @Get('team/:id')
  getPlayerTeam(@Param('id') id: string) {
    return this.playerService.searchPlayerTeam(parseInt(id));
  }
  @Get('pagination/')
  //<primer query param>=valor&<segundo query param>=otro valor
  getPagedRepository(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    return this.playerService.searchAllPaged(limit, offset);
  }
  @Get('date/:id')
  getPlayerDate(@Param('id') id: string) {
    return this.playerService.searchAbstractDate(id);
  }
  //Inserciones
  @Post()
  @HttpCode(204)
  async postPlayer(@Body() newPlayer: Jugador) {
    return await this.playerService.insertPlayer(newPlayer);
  }
  //Cambio de tag
  @Put(':playerId/tag/:tagId')
  assignTagToPlayer(
    @Param('playerId') playerId: string,
    @Param('tagId') tagId: string,
  ): Promise<Jugador> {
    this.logger.debug(
      `-- Assigning tag with id ${tagId} to player with id ${playerId}`,
    );
    return this.playerService.assignPlayerToTag(
      parseInt(playerId),
      parseInt(tagId),
    );
  }

  //Editar jugador
  @Put(':id')
  @HttpCode(204)
  async changePlayer(@Param('id') id: string, @Body() updatedPlayer: Jugador) {
    return await this.playerService.updatePlayer(parseInt(id), updatedPlayer);
  }
  //Borrar jugador
  @Delete()
  dropPlayer(@Param() id: number) {
    return this.playerService.removePlayer(id);
  }

  @Delete(':playerId/tag/:tagId')
  deletePlayerTag(
    @Param('playerId') playerId: string,
    @Param('tagId') tagId: string,
  ): Promise<Jugador> {
    this.logger.debug(
      `-- Deleting tag with id ${tagId} to player with id ${playerId}`,
    );
    return this.playerService.disassignTaskToTag(
      parseInt(playerId),
      parseInt(tagId),
    );
  }
}

function Args(arg0: string, arg1: { type: () => any }) {
  throw new Error('Function not found.');
}
