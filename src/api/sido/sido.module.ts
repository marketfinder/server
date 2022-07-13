import { Module } from '@nestjs/common';
import { SidoService } from './sido.service';
import { SidoController } from './sido.controller';

@Module({
  controllers: [SidoController],
  providers: [SidoService]
})
export class SidoModule {}
