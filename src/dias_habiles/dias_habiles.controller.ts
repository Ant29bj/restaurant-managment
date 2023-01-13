import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { DiasHabiles } from './dias_habiles.entity';
import { DiasHabilesService } from './dias_habiles.service';

@Controller('dias_habiles')
export class DiasHabilesController extends GenericController<
  DiasHabiles,
  DiasHabilesService
> {
  constructor(private readonly diasHabilesService: DiasHabilesService) {
    super(diasHabilesService);
  }
}
