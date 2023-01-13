import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { mermasCreateDto } from 'src/mermas/dto/create_mermas.dto';
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

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: mermasCreateDto, required: true })
  async Create(@Body() entity: Comanda) {
    return this.comandaService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: mermasCreateDto, required: true })
  async Update(@Param('id') id: number, @Body() entity: Comanda) {
    return this.update(id, entity);
  }
}
