import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { Mesas } from './mesa.entity';
import { MesasService } from './mesa.service';

@Controller('mesas')
@ApiTags('mesas')
export class MesasController extends GenericController<Mesas, MesasService> {
  constructor(private readonly mesasService: MesasService) {
    super(mesasService);
  }
}
