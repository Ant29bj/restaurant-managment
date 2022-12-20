import { Test, TestingModule } from '@nestjs/testing';
import { EquivalenciasMedidasController } from './equivalencias_medidas.controller';

describe('EquivalenciasMedidasController', () => {
  let controller: EquivalenciasMedidasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquivalenciasMedidasController],
    }).compile();

    controller = module.get<EquivalenciasMedidasController>(EquivalenciasMedidasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
