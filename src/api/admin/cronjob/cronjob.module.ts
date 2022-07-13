import { Module } from '@nestjs/common';
import { CronjobService } from './cronjob.service';
import { CronjobController } from './cronjob.controller';

@Module({
  controllers: [CronjobController],
  providers: [CronjobService]
})
export class CronjobModule {}
