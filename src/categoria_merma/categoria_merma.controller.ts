import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/generics/generic.controller';
import { CategoriaMermaCreateDto } from './dto/categoria_merma.dto';
import { CategoriaMerma } from './categoria_merma.entity';
import { CategoriaMermaService } from './categoria_merma.service';

@Controller('categoria_merma')
@ApiTags('categoria_merma')
export class CategoriaMermaController extends GenericController<
  CategoriaMerma,
  CategoriaMermaService
> {
  constructor(private readonly categoriaMermaService: CategoriaMermaService) {
    super(categoriaMermaService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: CategoriaMermaCreateDto, required: true })
  async create(@Body() entity: CategoriaMerma) {
    return this.categoriaMermaService.create(entity);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: CategoriaMermaCreateDto, required: true })
  async update(@Param('id') id: number, @Body() entity: CategoriaMerma) {
    return this.categoriaMermaService.update(id, entity);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaMermaService.delete(id);
  }
}
