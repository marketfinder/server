import { Module } from '@nestjs/common';
import { CronjobService } from './cronjob.service';
import { CronjobController } from './cronjob.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from 'src/api/branch/entities/branch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Branch])],
  controllers: [CronjobController],
  providers: [CronjobService]
})
export class CronjobModule { }
