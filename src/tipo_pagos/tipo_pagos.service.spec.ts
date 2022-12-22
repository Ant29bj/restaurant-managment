import { Test, TestingModule } from '@nestjs/testing';
import { TipoPagosService } from './tipo_pagos.service';

describe('TipoPagosService', () => {
  let service: TipoPagosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoPagosService],
    }).compile();

    service = module.get<TipoPagosService>(TipoPagosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
