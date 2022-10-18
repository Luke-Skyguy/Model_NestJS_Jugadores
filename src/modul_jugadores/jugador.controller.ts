import { Body, Controller, Delete, Get, HttpCode, Logger, Param, Post, Put, Query } from '@nestjs/common';
import { off } from 'process';
import { AppService } from 'src/app.service';
import { jugadores } from './jugador.entity';
import { JugadorService } from './JugadorService';


@Controller("jugadores")
export class JugadorController {
  private readonly logger = new Logger(JugadorController.name)
  constructor(private playerService: JugadorService ) { }
  
  @Get()
  getRepository() {
    this.logger.debug("log:" );
    return this.playerService.showAllRepository();
  }
 
  getPlayerRepository(@Param() id: number) {
    return this.playerService.searchRepository(id);
  }
  
  @Get("team/:id")
  getPlayerTeam(@Param('id') id: string) {
    return this.playerService.searchPlayerTeam(parseInt(id));
  }
  @Get("pagination/")
  //<primer query param>=valor&<segundo query param>=otro valor
  getPagedRepository(@Query('limit')limit:number, @Query('offset') offset:number) {
    return this.playerService.searchAllPaged(limit,offset);
  }

  @Post()
  @HttpCode(204)
  async postPlayer(@Body() newPlayer: jugadores) {
    return await this.playerService.insertPlayer(newPlayer);

  }
  @Put(':id')
  @HttpCode(204)
  async changePlayer(@Param('id')id : string , @Body() updatedPlayer: jugadores) {
    return await this.playerService.updatePlayer( parseInt(id), updatedPlayer);
  }

  @Delete()
  dropPlayer(@Param() id: number) {
    return this.playerService.removePlayer(id)
  }
}

function Args(arg0: string, arg1: { type: () => any; }) {
  throw new Error('Function not found.');
}

