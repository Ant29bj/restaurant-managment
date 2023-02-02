import { Test, TestingModule } from "@nestjs/testing";
import { RepresentanteLegalService } from "./representante_legal.service";

describe("RepresentanteLegalService", () => {
  let service: RepresentanteLegalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepresentanteLegalService],
    }).compile();

    service = module.get<RepresentanteLegalService>(RepresentanteLegalService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
