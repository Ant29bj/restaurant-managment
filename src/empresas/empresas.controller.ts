import { GenericController } from 'src/generics/generic.controller';
import { Empresas } from './empresas.entity';
import { EmpresasService } from './empresas.service';
import { Controller } from '@nestjs/common';
@Controller('empresas')
export class EmpresasController extends GenericController<
  Empresas,
  EmpresasService
> {
  constructor(private readonly empresasService: EmpresasService) {
    super(empresasService);
  }
}
