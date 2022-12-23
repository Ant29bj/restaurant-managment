import { Mermas } from './mermas.entity';
import { MermasService } from './mermas.service';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';

@Controller('mermas')
@ApiTags('Mermas')
export class MermasController extends GenericController<Mermas, MermasService> {
  constructor(private readonly mermasServicio: MermasService) {
    super(mermasServicio);
  }
}
