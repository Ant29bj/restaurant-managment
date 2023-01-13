import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { Sucursales } from './sucursales.entity';
import { SucursalesService } from './sucursales.service';

@Controller('sucursales')
export class SucursalesController extends GenericController<
  Sucursales,
  SucursalesService
> {
  constructor(private readonly sucursalesService: SucursalesService) {
    super(sucursalesService);
  }
}
