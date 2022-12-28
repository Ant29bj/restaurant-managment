import { Test, TestingModule } from '@nestjs/testing';
import { DetalleRecetaController } from './detalle_receta.controller';

describe('DetalleRecetaController', () => {
  let controller: DetalleRecetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleRecetaController],
    }).compile();

    controller = module.get<DetalleRecetaController>(DetalleRecetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
