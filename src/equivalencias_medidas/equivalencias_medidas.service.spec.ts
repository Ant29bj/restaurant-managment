import { Test, TestingModule } from '@nestjs/testing';
import { EquivalenciasMedidasService } from './equivalencias_medidas.service';

describe('EquivalenciasMedidasService', () => {
  let service: EquivalenciasMedidasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquivalenciasMedidasService],
    }).compile();

    service = module.get<EquivalenciasMedidasService>(EquivalenciasMedidasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
