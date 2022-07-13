import { Test, TestingModule } from '@nestjs/testing';
import { GunguController } from './gungu.controller';
import { GunguService } from './gungu.service';

describe('GunguController', () => {
  let controller: GunguController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GunguController],
      providers: [GunguService],
    }).compile();

    controller = module.get<GunguController>(GunguController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
