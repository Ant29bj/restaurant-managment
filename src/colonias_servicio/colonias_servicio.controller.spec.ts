import { Test, TestingModule } from '@nestjs/testing';
import { ColoniasServicioController } from './colonias_servicio.controller';

describe('ColoniasServicioController', () => {
  let controller: ColoniasServicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColoniasServicioController],
    }).compile();

    controller = module.get<ColoniasServicioController>(ColoniasServicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
