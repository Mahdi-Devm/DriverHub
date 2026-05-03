import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { initSwagger } from '@shared/config/swagger.config';
import { AllExceptionsFilter } from '@shared/filter/exception.filter';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      whitelist: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  initSwagger(app);
  await app.listen(process.env.PORT ?? 3002, async () => {
    Logger.log(`Server run on port :  ${process.env.PORT}`, 'AppLogger');
    Logger.log(
      `docs on :  http://localhost:${process.env.PORT}/docs#/`,
      'AppLogger',
    );
  });
}
bootstrap();
