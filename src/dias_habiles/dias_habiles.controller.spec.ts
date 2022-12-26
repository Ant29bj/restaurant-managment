import { Test, TestingModule } from '@nestjs/testing';
import { DiasHabilesController } from './dias_habiles.controller';

describe('DiasHabilesController', () => {
  let controller: DiasHabilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiasHabilesController],
    }).compile();

    controller = module.get<DiasHabilesController>(DiasHabilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
