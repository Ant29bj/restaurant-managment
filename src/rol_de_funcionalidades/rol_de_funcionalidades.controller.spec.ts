import { Test, TestingModule } from '@nestjs/testing';
import { RolDeFuncionalidadesController } from './rol_de_funcionalidades.controller';

describe('RolDeFuncionalidadesController', () => {
  let controller: RolDeFuncionalidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolDeFuncionalidadesController],
    }).compile();

    controller = module.get<RolDeFuncionalidadesController>(RolDeFuncionalidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
