import { Module } from '@nestjs/common';
import { GunguService } from './gungu.service';
import { GunguController } from './gungu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gungu } from './entities/gungu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gungu])],
  controllers: [GunguController],
  providers: [GunguService]
})
export class GunguModule { }
