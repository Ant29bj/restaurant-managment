import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { TipoMermas } from './tipo_mermas.entity';
import { TipoMermasService } from './tipo_mermas.service';
@UseGuards(JwtAuthGuard)

@Controller('tipo_mermas')
export class TipoMermasController extends GenericController<
  TipoMermas,
  TipoMermasService
> {
  constructor(private readonly tipoMermasService: TipoMermasService) {
    super(tipoMermasService);
  }
}
