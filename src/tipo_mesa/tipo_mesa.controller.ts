import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { TipoMesa } from './tipo_mesa.entity';
import { TipoMesaService } from './tipo_mesa.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('tipo_mesa')
@ApiTags('Tipo_mesa')
export class TipoMesaController extends GenericController<
  TipoMesa,
  TipoMesaService
> {}
