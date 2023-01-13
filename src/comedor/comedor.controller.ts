import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { Comedor } from './comedor.entity';
import { ComedorService } from './comedor.service';

@Controller('comedor')
export class ComedorController extends GenericController<
  Comedor,
  ComedorService
> {
  constructor(private readonly comedorService: ComedorService) {
    super(comedorService);
  }
}
