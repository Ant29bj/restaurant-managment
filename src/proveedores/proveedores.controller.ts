import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { ProveedoresCreateDTO } from './dto/proveedores.dto';
import { Proveedores } from './proveedores.entity';
import { ProveedoresService } from './proveedores.service';

@Controller('proveedores')
@ApiTags('Proveedores')
export class ProveedoresController extends GenericController<
  Proveedores,
  ProveedoresService
> {
  constructor(private readonly ProveedoresService: ProveedoresService) {
    super(ProveedoresService);
  }
  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: ProveedoresCreateDTO, required: true })
  async create(@Body() entity: Proveedores) {
    return this.ProveedoresService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: ProveedoresCreateDTO, required: true })
  async update(@Param(':id') id: number, @Body() entity: Proveedores) {
    return this.ProveedoresService.update(id, entity);
  }
}
