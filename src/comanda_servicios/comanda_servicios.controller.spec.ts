import { Test, TestingModule } from '@nestjs/testing';
import { ComandaServiciosController } from './comanda_servicios.controller';

describe('ComandaServiciosController', () => {
  let controller: ComandaServiciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComandaServiciosController],
    }).compile();

    controller = module.get<ComandaServiciosController>(ComandaServiciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
