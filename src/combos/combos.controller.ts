import {
  Body,
  Controller,
  Post,
  Param,
  Delete,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { ApiAcceptedResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { Combos } from './combos.entity';
import { CombosService } from './combos.service';
import { CreateComboDto } from './dto/create-combo.dto';
import { UpdateComboDto } from './dto/update-combo.dto';

@Controller('combos')
@ApiTags('Combos')
export class CombosController extends GenericController<Combos, CombosService> {
  constructor(private readonly CombosService: CombosService) {
    super(CombosService);
  }
  @Post()
  @ApiAcceptedResponse({ description: 'Combo agregado exitosamente' })
  @ApiBody({ type: CreateComboDto, required: true })
  async createCombo(@Body() entity: Combos) {
    return this.CombosService.create(entity);
  }
  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.CombosService.delete(id);
  }
  @Patch(':id')
  @ApiBody({ type: UpdateComboDto, required: true })
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() entity: Combos) {
    return this.CombosService.update(id, entity);
  }
}
