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
import { off } from 'process';
import { AppService } from 'src/app.service';
import { EquiposService } from './equipos.service';
import { equipos } from './equipos.entity';

@Controller('equipos')
export class EquiposController {
  constructor(private teamService: EquiposService) {}
  @Get()
  getAllTeams(@Param() id: number) {
    return this.teamService.showAllTeams();
  }
  @Get(':id')
  getRepository(@Param() id: number) {
    return this.teamService.searchTeam(id);
  }
  @Get('players/:id')
  getPlayersOfATeam(@Param('id') id: string) {
    return this.teamService.searchPlayersOfATeam(parseInt(id));
  }

  @Post()
  @HttpCode(204)
  async postPlayer(@Body() newTeam: equipos) {
    return await this.teamService.insertTeam(newTeam);
  }
  @Put(':id')
  @HttpCode(204)
  async changeTeam(@Param('id') id: string, @Body() updatedTeam: equipos) {
    return await this.teamService.updateTeam(parseInt(id), updatedTeam);
  }

  @Delete()
  dropTeam(@Param() id: number) {
    return this.teamService.removeTeam(id);
  }
}

function Args(arg0: string, arg1: { type: () => any }) {
  throw new Error('Function not found.');
}
