import { Test, TestingModule } from '@nestjs/testing';
import { ComedorController } from './comedor.controller';

describe('ComedorController', () => {
  let controller: ComedorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComedorController],
    }).compile();

    controller = module.get<ComedorController>(ComedorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
