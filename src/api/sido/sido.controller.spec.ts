import { Test, TestingModule } from '@nestjs/testing';
import { SidoController } from './sido.controller';
import { SidoService } from './sido.service';

describe('SidoController', () => {
  let controller: SidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SidoController],
      providers: [SidoService],
    }).compile();

    controller = module.get<SidoController>(SidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
