import { Test, TestingModule } from '@nestjs/testing';
import { RolDeFuncionalidadesService } from './rol_de_funcionalidades.service';

describe('RolDeFuncionalidadesService', () => {
  let service: RolDeFuncionalidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolDeFuncionalidadesService],
    }).compile();

    service = module.get<RolDeFuncionalidadesService>(RolDeFuncionalidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
