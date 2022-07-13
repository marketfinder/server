import { Test, TestingModule } from '@nestjs/testing';
import { SidoService } from './sido.service';

describe('SidoService', () => {
  let service: SidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SidoService],
    }).compile();

    service = module.get<SidoService>(SidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
