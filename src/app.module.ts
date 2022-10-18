import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulJugadoresModule } from './modul_jugadores/modul_jugadores.module';
import { ConfigModule } from '@nestjs/config';
import { ModulEquiposModule } from './modul_equipos/modul_equipos.module';


const entities: string[] = ['./**/*.entity.js'];

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'nest',
      database: 'lista_equipo',
      logging: ['error'],
      entities: entities,
      synchronize: true,
 
    }),
    ConfigModule.forRoot({

      isGlobal: true,

    }),

    ModulJugadoresModule,
    ModulEquiposModule


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
