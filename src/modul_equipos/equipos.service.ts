import { Injectable, NotFoundException, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { equipos } from './equipos.entity';





@Injectable()
export class EquiposService {
    constructor(
        @InjectRepository(equipos) private equipoRepository: Repository<equipos>) { }

        showAllTeams() {
            return this.equipoRepository.find();
        }
         // Busqueda con relacion a una entidad
        searchTeam(id: number) {
            return this.equipoRepository.find({ id_equipo: id });
        }
        


        async insertTeam(newTeam: equipos): Promise<equipos | undefined> {
            return await this.equipoRepository.save(newTeam);
    
        }
        async removeTeam(id: number) {
            const exist = await this.equipoRepository.findOne({ id_equipo: id })
            if (!exist) throw new NotFoundException('Este equipo no existe');
    
            return await this.equipoRepository.delete(id);
        }
        async updateTeam(id: number, newTeam: equipos) {
            let updatedTeam: equipos = await this.equipoRepository.findOne({ id_equipo: id });
            updatedTeam = { ...updatedTeam, ...newTeam }
            return await this.equipoRepository.save(updatedTeam);
    
        }
        searchPlayersOfATeam(id: number) {
                return this.equipoRepository.find({
                    where: { id_equipo: id },
                    relations: ['jugador']
                });
            }
        }
    