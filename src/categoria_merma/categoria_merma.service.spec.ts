import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaMermaService } from './categoria_merma.service';

describe('CategoriaMermaService', () => {
  let service: CategoriaMermaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaMermaService],
    }).compile();

    service = module.get<CategoriaMermaService>(CategoriaMermaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
