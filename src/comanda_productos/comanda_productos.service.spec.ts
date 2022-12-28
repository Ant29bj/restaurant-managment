import { Test, TestingModule } from '@nestjs/testing';
import { ComandaProductosService } from './comanda_productos.service';

describe('ComandaProductosService', () => {
  let service: ComandaProductosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComandaProductosService],
    }).compile();

    service = module.get<ComandaProductosService>(ComandaProductosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
