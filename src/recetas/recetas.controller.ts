import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { Recetas } from './recetas.entity';
import { RecetasService } from './recetas.service';

@Controller('recetas')
@ApiTags('recetas')
export class RecetasController extends GenericController<
  Recetas,
  RecetasService
> {
  constructor(private readonly recetasService: RecetasService) {
    super(recetasService);
  }
}
