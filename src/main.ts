import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 사이트 간 요청 위조 방지
  app.use(csurf())

  await app.listen(3000);
}

bootstrap();
