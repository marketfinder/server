import { Test, TestingModule } from '@nestjs/testing';
import { GunguService } from './gungu.service';

describe('GunguService', () => {
  let service: GunguService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GunguService],
    }).compile();

    service = module.get<GunguService>(GunguService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
