import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { AreaRestaurante } from './area_restaurante.entity';
import { AreaRestauranteService } from './area_restaurante.service';
import { CreateAreaDto } from './dto/createArea.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
@UseGuards(JwtAuthGuard)

@Controller('area_restaurante')
export class AreaRestauranteController extends GenericController<
  AreaRestaurante,
  AreaRestauranteService
> {
  constructor(private readonly areaRestauranteService: AreaRestauranteService) {
    super(areaRestauranteService);
  }
  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: CreateAreaDto, required: true })
  async createArea(@Body() newArea: CreateAreaDto) {
    const area = await this.areaRestauranteService.findOne({
      where: { descripcion: newArea.descripcion },
    });
    if (area) {
      return new HttpException('Area ya existente', HttpStatus.CONFLICT);
    }
    return this.areaRestauranteService.create(newArea);
  }
  @Patch(':id')
  @ApiBody({ type: UpdateAreaDto, required: true })
  async updateArea(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArea: UpdateAreaDto,
  ) {
    const verifyArea = await this.areaRestauranteService.findOneById(id);
    if (!verifyArea) {
      return new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.areaRestauranteService.update(id, updateArea);
  }
}
