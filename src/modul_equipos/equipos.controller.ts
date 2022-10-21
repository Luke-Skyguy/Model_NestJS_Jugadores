import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Equipo } from 'src/entities/equipo.entity';
import { EquiposService } from './equipos.service';

@Controller('equipo')
export class EquiposController {
  constructor(private teamService: EquiposService) {}
  @Get()
  getAllTeams(@Param() id: number) {
    return this.teamService.showAllTeams();
  }
  // @Get(':id')
  // getRepository(@Param() id: number) {
  //   return this.teamService.searchTeam(id);
  // }
  @Get('players/:id')
  getPlayersOfATeam(@Param('id') id: string) {
    return this.teamService.searchPlayersOfATeam(parseInt(id));
  }

  @Post()
  @HttpCode(204)
  async postPlayer(@Body() newTeam: Equipo) {
    return await this.teamService.insertTeam(newTeam);
  }
  @Put(':id')
  @HttpCode(204)
  async changeTeam(@Param('id') id: string, @Body() updatedTeam: Equipo) {
    return await this.teamService.updateTeam(parseInt(id), updatedTeam);
  }
  @Put(':playerId/tag/:teamId')
  assignTagToPlayer(
    @Param('playerId') playerId: string,
    @Param('teamId') teamId: string,
  ): Promise<Equipo> {
    return this.teamService.assignPlayerToTeam(
      parseInt(playerId),
      parseInt(teamId),
    );
  }

  @Delete()
  dropTeam(@Param() id: number) {
    return this.teamService.removeTeam(id);
  }
}
