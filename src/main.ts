import { TypeOrmModule } from '@nestjs/typeorm';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const entities: string[] = ['./**/*.entity.js'];
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
imports: [
  //Conexion con mysql
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'nest',
    password: 'nest',
    database: 'lista_equipo',
    logging: [
      'log'
    ],
    entities: entities,
    synchronize: false,
    migrationsRun: false
  })
]


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:console,
    //logger: ['error', 'warn', 'log'],
  });
  await app.listen(3001);
}
bootstrap();
