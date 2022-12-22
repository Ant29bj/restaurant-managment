import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaMermaController } from './categoria_merma.controller';

describe('CategoriaMermaController', () => {
  let controller: CategoriaMermaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaMermaController],
    }).compile();

    controller = module.get<CategoriaMermaController>(CategoriaMermaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
