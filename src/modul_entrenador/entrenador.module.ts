
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrenador } from './entrenador.entity';

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/nest'), TypeOrmModule.forFeature([Entrenador])]
}) 



export class AppModule { }