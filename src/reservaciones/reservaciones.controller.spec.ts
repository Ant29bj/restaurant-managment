import { Test, TestingModule } from '@nestjs/testing';
import { ReservacionesController } from './reservaciones.controller';

describe('ReservacionesController', () => {
  let controller: ReservacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservacionesController],
    }).compile();

    controller = module.get<ReservacionesController>(ReservacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
