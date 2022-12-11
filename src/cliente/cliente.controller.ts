import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiAcceptedResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
@ApiTags('Cliente')
export class ClienteController extends GenericController<
  Cliente,
  ClienteService
> {
  constructor(private readonly ClienteService: ClienteService) {
    super(ClienteService);
  }

  @Post()
  @ApiAcceptedResponse({ description: 'Combo agregado exitosamente' })
  @ApiBody({ type: CreateClienteDto, required: true })
  async postCliente(@Body() entity: CreateClienteDto) {
    const registerdCliente = await this.ClienteService.findOne({
      where: {
        email: entity.email,
        deleted: null,
      },
    });
    if (registerdCliente) {
      return 'User Already Registred';
    }
    return this.ClienteService.create(entity);
  }

  @Patch(':id')
  @ApiBody({ type: CreateClienteDto, required: true })
  async updateCliente(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCliente: UpdateClienteDto,
  ) {
    const registerdCliente = await this.ClienteService.findOne({
      where: { id: id },
    });
    if (!registerdCliente) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.ClienteService.update(id, updateCliente);
  }
}
