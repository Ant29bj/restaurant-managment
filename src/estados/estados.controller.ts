import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { EstadosCreateDto } from './dto/estados.dto';
import { Estados } from './estados.entity';
import { EstadosService } from './estados.service';

@UseGuards(JwtAuthGuard)

@Controller('estados')
export class EstadosController extends GenericController<
  Estados,
  EstadosService
> {
  constructor(private readonly estadosService: EstadosService) {
    super(estadosService);
  }

  @Post()
  @ApiBody({ type: EstadosCreateDto, required: true })
  async create(@Body() entity: Estados) {
    return this.estadosService.create(entity);
  }
}
