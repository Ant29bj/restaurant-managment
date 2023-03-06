import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { DiasHabiles } from './dias_habiles.entity';
import { DiasHabilesService } from './dias_habiles.service';
@UseGuards(JwtAuthGuard)

@Controller('dias_habiles')
export class DiasHabilesController extends GenericController<
  DiasHabiles,
  DiasHabilesService
> {
  constructor(private readonly diasHabilesService: DiasHabilesService) {
    super(diasHabilesService);
  }
}
