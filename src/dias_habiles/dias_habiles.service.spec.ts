import { Test, TestingModule } from '@nestjs/testing';
import { DiasHabilesService } from './dias_habiles.service';

describe('DiasHabilesService', () => {
  let service: DiasHabilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiasHabilesService],
    }).compile();

    service = module.get<DiasHabilesService>(DiasHabilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
