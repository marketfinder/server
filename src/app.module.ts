import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronjobModule } from './api/admin/cronjob/cronjob.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BranchModule } from './api/branch/branch.module';
import { SidoModule } from './api/sido/sido.module';
import { GunguModule } from './api/gungu/gungu.module';
import { Sido } from './api/sido/entities/sido.entity';
import { Gungu } from './api/gungu/entities/gungu.entity';
import { Branch } from './api/branch/entities/branch.entity';
import { MartModule } from './api/mart/mart.module';
import { NoticeModule } from './src/api/notice/notice.module';
import { ContactusModule } from './src/api/contactus/contactus.module';
import { NoticeModule } from './api/notice/notice.module';
import { ContactusModule } from './api/contactus/contactus.module';

@Module({
  imports: [
    // Cronjob : 정해진 시간에 자동적으로 돌리기
    ScheduleModule.forRoot(),
    // .env 파일 설정
    ConfigModule.forRoot(),
    // Brute force 공격 방지를 위해 정해진 시간 내 요청회수 제어
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT || 3306),
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [Sido, Gungu, Branch],
      synchronize: false
    }),
    CronjobModule,
    BranchModule,
    SidoModule,
    GunguModule,
    MartModule,
    NoticeModule,
    ContactusModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }