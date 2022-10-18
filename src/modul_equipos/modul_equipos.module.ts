import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquiposController } from './equipos.controller';
import { EquiposService } from './equipos.service';
import { equipos } from './equipos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([equipos])],
  controllers: [EquiposController],
  providers: [EquiposService],
})
export class ModulEquiposModule {}
