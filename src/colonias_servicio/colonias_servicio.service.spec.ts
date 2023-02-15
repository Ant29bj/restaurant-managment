import { Test, TestingModule } from '@nestjs/testing';
import { ColoniasServicioService } from './colonias_servicio.service';

describe('ColoniasServicioService', () => {
  let service: ColoniasServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColoniasServicioService],
    }).compile();

    service = module.get<ColoniasServicioService>(ColoniasServicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
