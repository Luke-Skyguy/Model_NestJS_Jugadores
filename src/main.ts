import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'debug', 'warn', 'log'],
  });
  app.enableCors({
    credentials: false,

    origin: '*', //corsOrigin[process.env.NODE_ENV],
  });
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));
  await app.listen(8000);
}
bootstrap();
