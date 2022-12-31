import { Test, TestingModule } from '@nestjs/testing';
import { ComedorService } from './comedor.service';

describe('ComedorService', () => {
  let service: ComedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComedorService],
    }).compile();

    service = module.get<ComedorService>(ComedorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
