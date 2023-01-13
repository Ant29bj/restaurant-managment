import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { Comanda } from './comanda.entity';
import { ComandaService } from './comanda.service';

@Controller('comanda')
export class ComandaController extends GenericController<
  Comanda,
  ComandaService
> {
  constructor(private readonly comandaService: ComandaService) {
    super(comandaService);
  }
}
