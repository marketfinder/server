import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot() // .env 파일 설정
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
