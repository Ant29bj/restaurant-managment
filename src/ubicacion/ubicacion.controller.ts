import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { Ubicacion } from './ubicacion.entity';
import { UbicacionService } from './ubicacion.service';

@Controller('ubicacion')
export class UbicacionController extends GenericController<
  Ubicacion,
  UbicacionService
> {
  constructor(private readonly ubicacionService: UbicacionService) {
    super(ubicacionService);
  }
}
