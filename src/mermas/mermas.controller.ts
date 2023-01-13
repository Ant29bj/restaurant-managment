import { Mermas } from './mermas.entity';
import { MermasService } from './mermas.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { mermasCreateDto } from './dto/create_mermas.dto';

@Controller('mermas')
@ApiTags('Mermas')
export class MermasController extends GenericController<Mermas, MermasService> {
  constructor(private readonly mermasServicio: MermasService) {
    super(mermasServicio);
  }

  @Post()
  @ApiBody({ type: mermasCreateDto, required: true })
  async create(@Body() entity: Mermas) {
    return this.mermasServicio.create(entity);
  }
}
