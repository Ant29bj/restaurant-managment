import { Test, TestingModule } from '@nestjs/testing';
import { ComandaProductosController } from './comanda_productos.controller';

describe('ComandaProductosController', () => {
  let controller: ComandaProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComandaProductosController],
    }).compile();

    controller = module.get<ComandaProductosController>(ComandaProductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
