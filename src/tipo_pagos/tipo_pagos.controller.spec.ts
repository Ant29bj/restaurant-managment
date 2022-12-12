import { Test, TestingModule } from '@nestjs/testing';
import { TipoPagosController } from './tipo_pagos.controller';

describe('TipoPagosController', () => {
  let controller: TipoPagosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoPagosController],
    }).compile();

    controller = module.get<TipoPagosController>(TipoPagosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
