import { Test, TestingModule } from '@nestjs/testing';
import { ComandaServiciosService } from './comanda_servicios.service';

describe('ComandaServiciosService', () => {
  let service: ComandaServiciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComandaServiciosService],
    }).compile();

    service = module.get<ComandaServiciosService>(ComandaServiciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
