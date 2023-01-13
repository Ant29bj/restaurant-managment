import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { MesaCreateDto } from './dto/mesa.dto';
import { Mesas } from './mesa.entity';
import { MesasService } from './mesa.service';

@Controller('mesas')
@ApiTags('mesas')
export class MesasController extends GenericController<Mesas, MesasService> {
  constructor(private readonly mesasService: MesasService) {
    super(mesasService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: MesaCreateDto, required: true })
  async create(@Body() entity: Mesas) {
    return this.mesasService.create(entity);
  }
}
