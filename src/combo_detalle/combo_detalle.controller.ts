import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { ComboDetalle } from './combo_detalle.entity';
import { ComboDetalleService } from './combo_detalle.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('combo_detalle')
@ApiTags('Combo_Detalle')
export class ComboDetalleController extends GenericController<
  ComboDetalle,
  ComboDetalleService
> {
  constructor(private readonly comboDetalleService: ComboDetalleService) {
    super(comboDetalleService);
  }
}
